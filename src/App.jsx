import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MyMap } from "./MyMap";

const url = "http://api.citybik.es/v2/networks";

function App() {
  const [foundProviders, setFoundProviders] = useState([]);
  const [allProviders, setAllProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAllProviders(response.data.networks);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(allProviders);
  return (
    <div className="App">
      <h1>Bike Rental Providers</h1>
      <MyMap />
      {allProviders.map((ele) => (
        <li key={ele.id}>
          {ele.name} {ele.location.city} ({ele.location.country})
        </li>
      ))}
    </div>
  );
}

export default App;
