import React from 'react'
import { FiFeather } from 'react-icons/fi'
import { SearchInput } from './SearchInput'

function App() {
	return (
		<div className='container'>
      <nav>Welcome to SearchVille <FiFeather /></nav>
      <div className='content'>
        <SearchInput label='search' />
      </div>
		</div>
	)
}

export default App
