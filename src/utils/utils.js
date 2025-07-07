import { useDebounce } from '@uidotdev/usehooks'
import searchHackerNews from './searchHackerNews'
import { useEffect, useState } from 'react'

export default function App() {
    const [searchTerm, setSearchTerm] = useState('js')
    const [results, setResults] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        setSearchTerm(formData.get('search'))
        e.target.reset()
        e.target.focus()
    }

    useEffect(() => {
        const searchHN = async () => {
            let results = []
            setIsSearching(true)
            if (debouncedSearchTerm) {
                const data = await searchHackerNews(debouncedSearchTerm)
                results = data?.hits || []
            }

            setIsSearching(false)
            setResults(results)
        }

        searchHN()
    }, [
        debouncedSearchTerm
    ])

    return (
        <section>
            <header>
                <h1>useDebounce</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name='search'
                        placeholder='Search HN'
                        style={{
                            background: 'var(--charcoal)'
                        }}
                        onChange={handleChange}
                    />
                    <button
                        className='primary'
                        disabled={isSearching}
                        type='submit'
                    >
                        {isSearching ? '...' : 'Search'}
                    </button>
                </form>
            </header>
            <SearchResults results={results} />
        </section>
    )
}
