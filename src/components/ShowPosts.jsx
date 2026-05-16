import {useState} from 'react'
import APIRequestWithFetch from './APIRequestWithFetch';

export default function ShowPosts() {
  const [show, setShow] = useState(false);

  const handleShowPosts = () => {
    setShow(!show);
  }

  return (
    <div><button className='btn' onClick={handleShowPosts}>Show API Request with Fetch</button>
    {show && <APIRequestWithFetch/>}</div>
  )
}
