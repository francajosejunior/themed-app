import React, { useState, useCallback, useEffect, useRef } from 'react'
import Icon from '../icon'
import { DebounceInput } from 'react-debounce-input'
import './style.scss'

const search = require('../../images/search.png')

export default function SearchInput({ placeholder, sendSearchValue }) {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)
  const [touched, setTouched] = useState(false)
  const inputEl = useRef(null)

  useEffect(() => {
    sendSearchValue(searchValue)
    if (searchValue !== '') {
      setError(false)
    } else if (touched && searchValue === '') {
      setError(true)
    }
  }, [searchValue, sendSearchValue])

  const handleChange = useCallback(e => {
    setSearchValue(e.target.value)
  }, [])

  const handleFocus = () => {
    if (searchValue === '') {
      setError(true)
      setTouched(true)
    }
  }

  const handleBlur = () => {
    setTouched(false)
    setError(false)
  }

  return (
    <div className={`search-input ${error ? 'error' : ''}`}>
      <DebounceInput
        className="debounce-search-input"
        inputRef={inputEl}
        onFocus={handleFocus}
        type="text"
        minLength={2}
        debounceTimeout={300}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <img
        className="search-input-icon"
        src={search}
        alt=""
        height="25"
        width="25"
      />
    </div>
  )
}
