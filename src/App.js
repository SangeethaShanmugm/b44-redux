import "./App.css";
import React from "react";
import CounterFunction from "./components/CounterFunction";
import Filters from "./Filters";

function App() {
  const user = {
    name: "Peter",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    imageSize: 200,
  };

  return (
    <div className="App">
      {/* <CounterFunction /> */}
      {/* <DisplayData user={user} /> */}
      <Filters />
    </div>
  );
}

export default App;

function DisplayData({ user }) {
  const products = [
    {
      id: 1,
      title: "Onion",
      category: "veg",
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg",
    },
    {
      id: 3,
      title: "Apple",
      category: "Fruit",
    },
    {
      id: 4,
      title: "Orange",
      category: "Fruit",
    },
  ];

  return (
    <React.Fragment>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <table
        style={{ border: "1px solid black", width: "800px", height: "200px" }}
      >
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
            </tr>
          );
        })}
      </table>
    </React.Fragment>
  );
}
