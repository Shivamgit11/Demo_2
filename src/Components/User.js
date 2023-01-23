import React, { useEffect, useState } from "react";
import ShowUser from "./Showuser";


const User = () => {
  console.log("inside User");
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setData(myjson);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log(data);

  console.log(data);

  return (
    <section>
      <ul>
        {data.map((val) => {
          return (
            <ShowUser
              key={Math.random()}
              id={val.id}
              name={val.name}
              city={val.address.city}
              street={val.address.street}
              email={val.email}
              phone={val.phone}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default User;
