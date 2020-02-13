import React, { useEffect, useMemo, useState, useCallback } from 'react'
import SelectEntry from './SelectEntry'
import Label from '../label'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComboBoxAction } from './listActions'

function ComboBox({
  inlineLabel = false,
  selectedValue,
  description,
  options = [],
  reducerName, // need to update reducers.js
  endpointURL,
  valueProp,
  labelProp,
  autoFetch = true,
  isMulti,
  ...rest
}) {
  const dispatch = useDispatch()
  const stateList = useSelector(state => state[reducerName])
  let list = stateList?.itens
  const pending = stateList?.pending

  const [comboBoxValue, setComboBoxValue] = useState([])

  useEffect(() => {
    if (autoFetch) {
      dispatch(fetchComboBoxAction(reducerName, endpointURL))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducerName, endpointURL])

  const mapedOptions = useMemo(() => {
    return (autoFetch ? list : options || []).map(v => {
      return {
        label: v[labelProp] || v.label,
        value: v[valueProp] || v.value
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelProp, list, valueProp])

  const handleSelected = useCallback(
    selectedObj => {
      if (isMulti) {
        setComboBoxValue(selectedObj)
        return selectedValue((selectedObj || []).map(s => s.value))
      }
      setComboBoxValue(selectedObj)
      return selectedValue(selectedObj ? selectedObj.value : {})
    },
    [isMulti, selectedValue]
  )

  return (
    <div className={`combo-box ${inlineLabel && 'label-line'}`}>
      {!!description && <Label inlineLabel={inlineLabel}>{description}</Label>}
      <SelectEntry
        onChange={handleSelected}
        value={comboBoxValue}
        isMulti={isMulti}
        options={mapedOptions}
        {...rest}
        pending={pending}
      />
    </div>
  )
}

export default ComboBox
