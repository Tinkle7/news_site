import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function App() {
  const [news, setNews] = useState([]);

  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e99c3e53b18c4a2792268a538b6f84cd"
    )
    .then((response) => {
      console.log(response);
      setNews(response.data.articles);
    });
  return (
    <>
      <div className="container">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <Link to="#" className="btn btn-primary">
                      Main
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
