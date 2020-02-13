import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const customStyles = {
  control: base => ({
    ...base,
    minHeight: 30
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: 4
  }),
  clearIndicator: base => ({
    ...base,
    padding: 4
  }),
  valueContainer: base => ({
    ...base,
    padding: '0px 6px'
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0
  }),
  menu: base => {
    return {
      ...base,
      zIndex: 20000
    }
  },
  menuPortal: base => {
    return {
      ...base,
      zIndex: 20000
    }
  }
}

// const animatedComponents = makeAnimated() // doesn't work in safari

function SelectEntry(props) {
  return (
    <>
      <Select
        hideSelectedOptions={false}
        closeMenuOnSelect={!props.isMulti}
        // components={animatedComponents}
        isClearable={true}
        styles={customStyles}
        {...props}
        placeholder="Operação..."
        classNamePrefix={`ReactSelectRow`}
        className={props.pending ? 'pending' : ''}
      />
    </>
  )
}

export default SelectEntry
