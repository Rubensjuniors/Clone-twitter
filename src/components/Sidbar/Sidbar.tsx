import List from '../Cards/ListProfile/List'
import Tags from '../Cards/happening/CardTags/Tags'
import Happening from '../Cards/happening/Happening'
import Search from '../Input/Search'
import './Sidbar.scss'

const Sidbar = () => {
  const trandings = [
    {
      trending: 'Trending in Brazil',
      tag: 'UMA TRANDING!!!!!!!!!',
      number: '2.453',
    },
    {
      trending: 'Trending in Brazil',
      tag: '#show',
      number: '3.454',
    },
    {
      trending: 'Trending in Brazil',
      tag: 'Javascript',
      number: '5.453',
    },
    {
      trending: 'Trending in Brazil',
      tag: 'React',
      number: '3.453',
    },
    {
      trending: 'Trending in Brazil',
      tag: '#css',
      number: '25.453',
    },
  ]

  return (
    <div className="sidbar">
      <Search />
      <Happening>
        {trandings.map((trand, index) => {
          return (
            <Tags
              key={index}
              tagContry={trand.trending}
              title={trand.tag}
              tweets={trand.number}
            />
          )
        })}
      </Happening>

      <List />
    </div>
  )
}

export default Sidbar
