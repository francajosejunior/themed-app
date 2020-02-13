import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Col from '../../components/column'
import ComboBox from '../../components/comboBox'
import HorizonLine from '../../components/horizonLine'
import Row from '../../components/row'
import SearchInput from '../../components/searchInput'
import SubTitle from '../../components/subTitle'
import Tile from '../../components/tile'
import Title from '../../components/title'
import Tooltip from '../../components/tooltip'
import {
  fetchformalizationMatAction,
  formalizationPropostasAndamentoSelector,
  formalizationStatusSelector
} from './formalizationMatSlice'
import './style.scss'
import ChartIcon from '../../components/chartIcon'

function FormalizationMat(params) {
  const dispatch = useDispatch()

  const [operationId, setOperationId] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const status = useSelector(formalizationStatusSelector)
  const propstas = useSelector(formalizationPropostasAndamentoSelector)
  useEffect(() => {
    dispatch(fetchformalizationMatAction(operationId, searchInput))
  }, [dispatch, operationId, searchInput])

  const fetchSearch = useCallback(value => {
    setSearchInput(value)
  }, [])

  return (
    <>
      <Title>Esteira Formalização</Title>
      <Row oppositeAlign={true}>
        <Col largura={250}>
          <ComboBox
            endpointURL="/operacao"
            valueProp="IdOperacao"
            labelProp="DescricaoOperacao"
            reducerName="operation"
            isMulti={true}
            selectedValue={setOperationId}
          />
        </Col>
        <Col largura={250}>
          <SearchInput
            placeholder="min. 2 caracteres..."
            sendSearchValue={fetchSearch}
          />
        </Col>
      </Row>
      <HorizonLine />

      <div className="formalizationmat-dashboard">
        <div className="pool">
          {status.map((status, i) => {
            return (
              <Tooltip text={status.agrupador} key={i}>
                <Tile
                  animate
                  label={status.agrupador}
                  value={status.valor}
                  color={status.cor}
                  icon={<ChartIcon />}
                  size="large"
                  key={i}
                />
              </Tooltip>
            )
          })}
        </div>
        {status
          .filter(x => x.subGrupos.length > 0)
          .map((status, i) => {
            return (
              <React.Fragment key={i}>
                <SubTitle>{status.agrupador}</SubTitle>
                <div className="pool">
                  {status.subGrupos.map((status, idx) => {
                    return (
                      <Tooltip text={status.agrupador} key={idx}>
                        <Tile
                          animate
                          label={status.agrupador}
                          value={status.valor}
                          color={status.cor}
                          icon=""
                          size="medium"
                        />
                      </Tooltip>
                    )
                  })}
                </div>
              </React.Fragment>
            )
          })}

        {propstas.length > 0 && (
          <>
            <SubTitle>Propostas em andamento</SubTitle>
            <div className="pool">
              {propstas.map((grupoDeProposta, i) => {
                return (
                  <Tooltip text={grupoDeProposta.agrupador} key={i}>
                    <Tile
                      animate
                      label={grupoDeProposta.agrupador}
                      value={grupoDeProposta.valor}
                      color={grupoDeProposta.cor}
                      icon=""
                      size="medium"
                      key={i}
                    />
                  </Tooltip>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default FormalizationMat
