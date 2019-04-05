import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import './styles/App.scss';
// import page1 from './data/test-data-page-1.json';


const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Switch to asyn await?
    // Setting this up to get data on mount, this will be moved to happen on search keydown
    axios.get('data/test-data-page-1.json')
      .then(res => {
        const data = res.data;
        setResults([results, ...data.results]);
        setLoading(false);
      })
      .catch((e) => {
        // handle error
      })
  }, [search])

  return (
    <div className="app">
      <div className="header">
        <div className="app-title">Movie Search App</div>
        <Search setSearch={setSearch}></Search>
      </div>
    </div>
  );
}

export default App;
