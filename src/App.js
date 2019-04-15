import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';
import './styles/App.scss';

const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setFetching(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setLoading(true);

    axios.get(search)
      .then(res => {
        const data = res.data;

        setTotalPages(data.total_pages);
        setResults(data.results);
        setLoading(false);
      })
      .catch((e) => {
        alert('Error loading movie data');
        setLoading(false);
      })
  }, [search])

  useEffect(() => {
    if (!fetching) {
      return;
    }

    if (page === totalPages) {
      setFetching(false);
      return;
    }
    axios.get(`${search}&page=${page + 1}`)
      .then(res => {
        const data = res.data;

        setResults([...results, ...data.results]);
        setPage(page + 1);
        setFetching(false);
      })
      .catch((e) => {
        alert('Error loading movie data');
        setFetching(false);
      })
  }, [fetching])

  return (
    <div className="app">
      <div className="header">
        <div className="app-title">Movie Search App</div>
        <Search setSearch={setSearch}></Search>
      </div>
      <div className="results">
        {
          loading ? <div className="loading" /> :
          results.map((result, i) => {
            return (
              <Result movie={result} key={i}/>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
