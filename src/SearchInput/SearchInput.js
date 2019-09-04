import React, { useState } from 'react'
import { FiPlusSquare, FiXSquare, FiX, FiFilter } from 'react-icons/fi'
import './searchInput.css'

const labels = [
	{ name: 'Name', value: 'cuda' },
	{ name: 'Latest Tag', value: '1.0' },
  { name: 'Size', value: [ 'large', 'medium', 'small' ] },
  { name: 'Module', value: 'cuda' },
	{ name: 'Library', value: '1.0' },
	{ name: 'Spec', value: [ 'large', 'medium', 'small' ] }
]

export const SearchInput = ({ label }) => {
	const [ labelsOpen, toggleLabels ] = useState(false)
	return (
    <div className='search-input-component'>
      <div className='filter-icon-container'>
        <FiFilter className='filter-icon' />
      </div>
      <div className='search-input-container'>
        <label htmlFor='search-input'>{label}</label>
        <input id='search-input' type='search' className='search-input' />
        {labelsOpen ? (
          <div>
            <FiXSquare className='feather-icon' onClick={() => toggleLabels(!labelsOpen)} />
            <div className='search-input-label-container'>
              {labels.map((label, i) => <span key={i} onClick={() => console.log('hi')}>{label.name}</span>)}
            </div>
          </div>
        ) : (
          <div>
          <FiPlusSquare className='feather-icon' onClick={() => toggleLabels(!labelsOpen)} />
          </div>
        )}
      </div>
      <div className='search-close-container'>
          <FiX className='close-x' />
      </div>
      <div className='search-button-container'>
        <button type='submit'>submit</button>
      </div>
    </div>
	)
}
