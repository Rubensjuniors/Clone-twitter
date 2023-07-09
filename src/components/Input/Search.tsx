import { MagnifyingGlass } from '@phosphor-icons/react'
import './Search.scss'

const Search = () => {
  return (
    <form className="searchbar">
      <label className="searchbar__wrapper">
        <button type="submit" className="searchbar__wrapper-button">
          <MagnifyingGlass size={32} />
        </button>

        <input
          className="searchbar__wrapper-input"
          type="text"
          name="q"
          autoCapitalize="off"
          autoComplete="off"
          title="Search"
          placeholder="Search Twitter"
        />
      </label>
    </form>
  )
}

export default Search
