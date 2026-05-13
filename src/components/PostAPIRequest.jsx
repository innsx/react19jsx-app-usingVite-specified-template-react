import { useState, useEffect } from "react";

export default function PostAPIRequest() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    //   .then((res) => res.json())
    //   .then((res) => setPosts(res))
    //   .catch((err) => {
    //     setError(err);
    //   });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        setError(err);
      });
    return () => controller.abort(); // clean up function
  }, []);

  console.log(posts);
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <div key={post.id}>
            <p className="flexStart">
              {post.id}: {post.title}
            </p>
          </div>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";

// export default function PostAPIRequest() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               title: "My Post",
//               content: "This is the content of my post.",
//             }),
//             // signal: signal,
//           },
//         );
//         const result = await response.json();
//         setData(result);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     return () => controller.abort();
//   }, []);

//   return (
//     <div>
//       <h3>PostAPIRequest</h3>
//       {data && (
//         <p>
//           {data.id}: {data.title}
//         </p>
//       )}
//     </div>
//   );
// }
