import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export default function Card(props) {
  const [data, setData] = useState([]);

  const cards = data.map(data => {
    let date = moment(data.created_at).format("LL");
    return (
      <div key={data.id} className="card">
        <h3 className="title">{data.title}</h3>
        <h5 className="date-created">{date}</h5>
      </div>
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.dailysmarty.com/posts");
      setData(result.data.posts);
    };

    fetchData();
  }, []);

  return <div className="list-of-cards">{cards}</div>;
}
