import { useState } from "react"


export default function useConter(){

  const [like, setLike] = useState<number>(0)
  const [isclickLike, setisclickLike] = useState<boolean>(false)
  const [retweet, setRetweet] = useState<number>(0)
  const [isclickRetweet, setisclickRetweet] = useState<boolean>(false)

  function handleLike(){
    setisclickLike(!isclickLike)
    if(isclickLike){  
      return setLike(like - 1)
    }

    return setLike(like + 1)
  }
  function handleRetweet(){
    setisclickRetweet(!isclickRetweet)
    if(isclickRetweet){  
      return setRetweet(retweet - 1)
    }

    return setRetweet(retweet + 1)
  }



  return {
    like,
    retweet,
    handleLike,
    handleRetweet,
    isclickLike,
    isclickRetweet
  }
}