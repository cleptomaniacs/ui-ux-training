import { useEffect, useState } from "react";

const PostFetch = ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetching data...");
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { data };
};

export default PostFetch;
