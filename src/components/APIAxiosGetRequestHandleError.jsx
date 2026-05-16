import {useState, useEffect} from 'react';
import axios from "axios";

//https://www.geeksforgeeks.org/reactjs/axios-in-react-a-guide-for-beginners/
export default function APIAxiosGetRequestHandleError() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make GET request to fetch data
        axios
            .get("https://jsonplaceholder.typicode.com//invalid-endpoint")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);

                // Handle different types of errors
                // if (err.response) {
                //     // Server responded with a status other than 2xx
                //     console.log("Response error:", err.response);
                // } else if (err.request) {
                //     // No response was received
                //     console.log("Request error:", err.request);
                // } else {
                //     // Something went wrong setting up the request
                //     console.log("Error:", err.message);
                // }
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};
