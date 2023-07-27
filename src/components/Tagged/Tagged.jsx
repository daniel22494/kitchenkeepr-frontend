import { useEffect, useState } from "react";
import axios from "axios";

function Tags() {
  const [tags, setTags] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/tags`).then(({ data }) => {
      setTags(data);
      console.log(data);
    });
  }, []);

  if (!tags) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Tags!!</h1>
      <ul>
        {tags.map((tag) => {
          return (
            <li
              key={tag.id}
              onClick={() => {
                console.log(tag.id);

                axios
                  .get(`http://localhost:8080/taggedRecipes?tag_id=${tag.id}`)
                  .then(({ data }) => {
                    console.log(data);
                  });
              }}
            >
              {tag.tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tags;
