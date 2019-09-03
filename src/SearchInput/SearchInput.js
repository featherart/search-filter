import React, { useState } from 'react'
import { FiPlusSquare, FiXSquare } from 'react-icons/fi'
import './searchInput.css'

const labels = [
	{ name: 'Name', value: 'cuda' },
	{ name: 'Latest Tag', value: '1.0' },
	{ name: 'Size', value: [ 'large', 'medium', 'small' ] }
]

export const SearchInput = ({ label }) => {
	const [ labelsOpen, toggleLabels ] = useState(false)
	return (
    <div className='search-input-component'>
      <div className='search-input-container'>
        <label for='search-input'>{label}</label>
        <input id='search-input' type='search' className='search-input' />
        {labelsOpen ? (
          <div>
            <FiXSquare className='feather-icon' onClick={() => toggleLabels(!labelsOpen)} />
            <div className='search-input-label-container'>
              {labels.map((label) => <span onClick={() => console.log('hi')}>{label.name}</span>)}
            </div>
          </div>
        ) : (
          <FiPlusSquare className='feather-icon' onClick={() => toggleLabels(!labelsOpen)} />
        )}
      </div>
      <button type='submit'>submit</button>
    </div>
	)
}
