import { useEffect, useState } from "react";
import Newsitem from "./newsItem";

const Newsboard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6e165f3079a74dccb57e6b52962ca18b";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles?.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
