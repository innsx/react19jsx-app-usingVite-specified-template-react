import {useState} from 'react'
import PostAPIRequest from './PostAPIRequest';

export default function ShowPosts() {
  const [show, setShow] = useState(false);

  const handleShowPosts = () => {
    setShow(!show);
  }

  return (
    <div><button className='btn' onClick={handleShowPosts}>Show Posts</button>
    {show && <PostAPIRequest/>}</div>
  )
}
