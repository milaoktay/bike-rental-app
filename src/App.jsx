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

  function handleInput(event) {
    setSearchTerm(event.target.value);
    setFoundProviders(
      allProviders.filter((ele) =>
        ele.location.city.toLowerCase().includes(searchTerm)
      )
    );
  }

  return (
    <div className="App">
      <h1>Bike Rental Providers</h1>
      <MyMap
        providers={searchTerm.length < 1 ? allProviders : foundProviders}
      />

      <input
        onChange={handleInput}
        value={searchTerm}
        placeholder="Search city"
      ></input>

      {(searchTerm.length < 1 ? allProviders : foundProviders).map((ele) => (
        <li key={ele.id}>
          {ele.name} {ele.location.city} ({ele.location.country})
        </li>
      ))}
    </div>
  );
}

export default App;
