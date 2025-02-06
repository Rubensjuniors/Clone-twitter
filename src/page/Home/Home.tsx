import './Home.scss'
import Header from '../../components/Header/Header'
import Separator from '../../components/Separator/Separator'
import Tweet from '../../components/Tweet/Tweet'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { PaperPlaneRight } from '@phosphor-icons/react'

const TimeLine = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweet, setTweet] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
    'Deu certo tweetar!',
  ])

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault()
    if (!newTweet) {
      return
    }
    setTweet([newTweet, ...tweet])
    setNewTweet('')
  }

  const handleHotkeySubmit = ({ key, ctrlKey, metaKey }: KeyboardEvent) => {
    if (key === 'Enter' && (ctrlKey || metaKey)) {
      setTweet([newTweet, ...tweet])
      setNewTweet('')
    }
  }

  return (
    <>
      <Header title="Home" />
      <main>
        <form onSubmit={createNewTweet} className="timeline-form">
          <label htmlFor="Tweet" className="timeline-form__label">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/104171589?v=4"
                alt="Rubensjunio"
              />
            </div>

            <textarea
              name="Tweet"
              id="Tweet"
              value={newTweet}
              placeholder="What is thinking?"
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => setNewTweet(event.target.value)}
            ></textarea>
          </label>

          <button className="timeline-form__button" type="submit">
            <span>Tweet</span>
            <PaperPlaneRight />
          </button>
        </form>
        <Separator />
      </main>
      {tweet.map((tweet, index) => {
        return (
          <Tweet
            key={index}
            photo="https://avatars.githubusercontent.com/u/104171589?v=4"
            name="Rubens Junio"
            user="@Eorubis"
            time="1m"
            content={tweet}
          />
        )
      })}
    </>
  )
}

export default TimeLine
