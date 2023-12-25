import React from 'react';
import { useSearchParams } from 'react-router-dom';
import css from 'pages/Movies/Movies.module.css';

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();
    const newQuery = event.target.elements.query.value;
    setSearchParams({ query: newQuery });
    event.currentTarget.reset();
  };

  return (
    <form className={css.formMovies} onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Movie search"
        defaultValue={query}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
