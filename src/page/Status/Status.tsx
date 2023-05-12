import {  FormEvent, KeyboardEvent, useState } from "react";
import Header from "../../components/Header/Header";
import Separator from "../../components/Separator/Separator";
import Tweet from "../../components/Tweet/Tweet";
import "./_Statu.scss";
import { PaperPlaneRight } from "@phosphor-icons/react";


const Status = () => {

  const [answerTweetValue, setAnswerTweetValue] = useState('')
  const [answerTweet, setAnswerTweet] = useState(["Super Teste do teste"])

  const createAnswerTweet = (event: FormEvent)=>{
    event.preventDefault()
    if(!answerTweetValue){
      return;
    }
    setAnswerTweet([answerTweetValue,...answerTweet])
    setAnswerTweetValue('')
 
  }

   const handleHotKeySubmit = ({key, ctrlKey, metaKey}: KeyboardEvent)=>{
      if(key === 'Enter' && (ctrlKey || metaKey)){
        setAnswerTweet([answerTweetValue,...answerTweet])
        setAnswerTweetValue('') 
      }
   }

  return (
    <>
      <main className="status">
        <Header title="Tweet" />

        <Tweet 
        photo="https://avatars.githubusercontent.com/u/104171589?v=4"
        name="Rubens Junio"
        user="@Eorubis"
        time='1m'
        content='opaaa' />
        <Separator />
        <form onSubmit={createAnswerTweet} className="answerTweet__form">
          <label htmlFor="Tweet">
            <img
              src="https://avatars.githubusercontent.com/u/104171589?v=4"
              alt="Rubensjunio"
            />
            <textarea
              name="Tweet"
              id="Tweet"
              value={answerTweetValue}
              onChange={event => setAnswerTweetValue(event.target.value)}
              onKeyDown={handleHotKeySubmit}
              placeholder="Tweet your answer"
            ></textarea>
          </label>
          <button type="submit">
            <span>Answer</span>
            <PaperPlaneRight/> 
            </button>
        </form>
      </main>
      {answerTweet.map((answer) => {
        return <Tweet 
        key={answer} 
        photo="https://avatars.githubusercontent.com/u/104171589?v=4"
        name="Rubens Junio"
        user="@Eorubis"
        time='1m'
        content={answer} />;;
      })}
    </>
  );
};

export default Status;
