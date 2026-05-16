import { useState } from "react";
import axios from "axios";

export default function APIAxiosPostRequest() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    //When you interact with a web page—like clicking a link or submitting a form—the browser has "built-in" actions it performs automatically. 
    // Calling preventDefault() tells the browser, "Don't do that; I'll handle it myself with code instead".
    e.preventDefault();

    const newPostModel = {
      title,
      body,
    };

    // BEST PRATCICE: Create an Axios instance: You can create an instance of Axios with default configurations,
    // such as base URL and headers, to avoid repeating these settings in every request.
    const axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com//",
      timeout: 1000,
    });

    //Best practice: Use Axios with async/await: For cleaner code, consider using async/await with Axios.
    //https://www.geeksforgeeks.org/reactjs/axios-in-react-a-guide-for-beginners/
    try {
      // Use the Axios instance to make a POST request
      const response = await axiosInstance.post("/posts", newPostModel);

      // You can also use the standard axios.post method without creating an instance,
      // but using an instance allows for better organization and reusability of your API calls.
      //   const response = await axios.post(
      //     "https://jsonplaceholder.typicode.com/posts",
      //     newPostModel,
      //   );

      console.log(response.data);
      setResponseMessage("Data posted successfully!");
      console.log(responseMessage);
    } catch (error) {
      //   console.error("Error posting data:", error);
      //   setResponseMessage("Error posting data");

      if (error.response) {
        // Server responded with a status other than 2xx
        console.log("Response error:", error.response);
      } else if (error.request) {
        // No response was received
        console.log("Request error:", error.request);
      } else {
        // Something went wrong setting up the request
        console.log("Error:", error.message);
      }
    }

    setBody("");
    setTitle("");
  };

  return (
    <div>
      <h2>APIAxiosPostRequest</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
