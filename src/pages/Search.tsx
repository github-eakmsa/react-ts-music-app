import React, { useEffect, useState } from 'react'
import MusicDetails from '../components/MusicDetails'

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.example.com/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  }
    if (query) { fetchData(); }
    }, [query]);

  // ---
  const [res, setRes] = useState([
    {id: 1, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
  ])
  const handleClick = () => {
    setRes(
      [
        {id: 1, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 2, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 3, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 4, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 5, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 6, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 7, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
        {id: 8, cover: 'img/photos/unsplash-1.jpg', title: 'music title'},
    ])
  }

  return (
    <div className="container-fluid p-0">

      <h1 className="h3 mb-3">Search Music</h1>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">

              <div className="row">
                <div className="col-12 col-md-12">
                  <form >
                      <input
                      type="search"
                      // onChange={(e) => setQuery(e.target.value)}
                      onChange={handleClick}
                      value={query}
                      className="form-control form-control-lg"
                      placeholder="Enter Search keywords"
                      />
                      {/* <button type="submit" className='btn btn-primary'>Search</button> */}
                    </form>
                </div>
              </div>
              <br />
              {/* {results.map((result) => ( <li key={result.id}>{result.title}</li> ))} */}
              {/* {query ? query: ''} */}
            {(res.length > 1) ?
              <div className="row">
            {res.map((i)=> (
              <MusicDetails music={i} key={i.id}/>
            ))}
              </div>
            : ''}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search