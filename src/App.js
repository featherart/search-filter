import React from 'react'
import { SearchInput } from './SearchInput'

function App() {
	return (
		<div className='container'>
      <nav>Welcome to SearchVille</nav>
      <div className='content'>
        <SearchInput label='search' />
      </div>
		</div>
	)
}

export default App
