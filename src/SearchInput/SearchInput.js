import React, { useState } from 'react'
import { FiPlusSquare, FiXSquare, FiX, FiFilter } from 'react-icons/fi'
import { Tag } from '../Tag'
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
	const [ query, setQuery ] = useState('')
	const [ tags, setTags ] = useState([])

	const addToQuery = (label) => {
    //setQueryLabels([ ...queryLabels, label ])
    setQuery(query + ',' + label)
  }
  console.log('query', query, query.split(','))

	const placeholder = 'enter search term or select a label'

	return (
		<div className='search-input-component'>
			<div className='filter-icon-container'>
				<FiFilter className='filter-icon' />
			</div>
			<div className='search-input-container'>
				<label htmlFor='search-input'>{label}</label>
				<input
					placeholder={placeholder || query}
					id='search-input'
					type='search'
					className='search-input'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{labelsOpen ? (
					<div>
						<FiXSquare className='open-close-icon' onClick={() => toggleLabels(!labelsOpen)} />
						<div className='search-input-label-container'>
							{labels.map((label, i) => (
								<span key={i} onClick={() => addToQuery(label.name)}>
									{label.name}
								</span>
							))}
						</div>
					</div>
				) : (
					<div>
						<FiPlusSquare className='open-close-icon' onClick={() => toggleLabels(!labelsOpen)} />
					</div>
        )}
        <div className='tags-row'>
          {query.split(',').map((ql) => <Tag>{ql}</Tag>)}
        </div>
			</div>
			<div className='search-close-container'>
				<FiX className='close-x' onClick={() => setQuery('')} />
			</div>
			<div className='search-button-container'>
				<button type='submit'>Enter</button>
			</div>
		</div>
	)
}
