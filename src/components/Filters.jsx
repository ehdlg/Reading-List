/* eslint-disable react/prop-types */
const GENRES = ['Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'];

function Filters({ filters, handleFilters }) {
  return (
    <div className='filters'>
      <div className='min-pages'>
        <label htmlFor='filter-pages'>Número mínimo de páginas:</label>
        <input
          type='range'
          name='pages'
          id='filter-pages'
          value={filters.minPages}
          min='0'
          max='1500'
          onChange={(e) => handleFilters(e, 'minPages')}
        />
        <span>{filters.minPages} páginas</span>
      </div>
      <select
        name='genre'
        id='genre'
        onChange={(e) => handleFilters(e, 'genre')}
        value={filters.genre}
      >
        <option value='all'>Todos</option>
        {GENRES.map((genre) => {
          return (
            <option key={crypto.randomUUID()} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filters;
