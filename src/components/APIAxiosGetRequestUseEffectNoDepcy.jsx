import axios from "axios";
import { useEffect, useState } from "react";

export default function APIAxiosGetRequestUseEffectNoDepcy() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  //https://refine.dev/blog/useeffect-cleanup/
  useEffect(() => {
    // 1. Initialize the controller
    const controller = new AbortController();

    // 2. Execute the fetch request with the signal from the controller
    // const signal = controller.signal;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data))
      .catch((err) => setError(err.message));

    return () => controller.abort(); // clean up function
  }, []);

  return (
    <div>
      <br />
      <br />
      <h2>API Get Request with Axios</h2>
      <br />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        blogs.map((blog) => (
          <p className="flexStart" key={blog.id}>
            {blog.title}
          </p>
        ))
      )}
    </div>
  );
}
