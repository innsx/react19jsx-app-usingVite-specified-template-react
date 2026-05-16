import { useState, useEffect } from "react";


// the UseEffectAsyncAwaitNeedsCleanup component fetches and displays information about a particular user. 
// If the component is unmounted (for example, if the user navigates away from the component), 
// the ongoing API request will still be in progress in the background. 
// This can cause unnecessary network traffic and potentially result in data inconsistencies 
// if the response from the API is received after the component has been unmounted.
export default function UseEffectAsyncAwaitNeedsCleanup() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  let userId = 3;

  // useEffect cleanup function can be crucial when working with async operations,
  // such as API requests because it allows you to cancel any ongoing async tasks before the component is unmounted.
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { signal },
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };

    fetchUser();

    // return () => {
    //   controller.abort();
    // };
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {" "}
      <p>
        User with ID: {userId} {user.name}
      </p>
    </div>
  );
}
