import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MyMap } from "./MyMap";

const url = "http://api.citybik.es/v2/networks";

function App() {
  const [allProviders, setAllProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundProviders, setFoundProviders] = useState([]);

  //Location
  const [position, setPosition] = useState([]);
  const [status, setStatus] = useState(null);
  const [zoom, setZoom] = useState(10);

  //Get location from user
  useEffect(() => {
    (() => {
      if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by your browser");
      } else {
        setStatus("Locating...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus(null);
            setPosition([position.coords.latitude, position.coords.longitude]);
          },
          () => {
            //If the user declines geolocation, display zoomed out map of the whole world
            setStatus(null);
            setPosition([50, 10]);
            setZoom(2);
          }
        );
      }
    })();
  }, []);

  //Fetch data of all bike providers
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

  //Filter data on search
  function handleInput(event) {
    setSearchTerm(event.target.value);
    //Update providers list
    setFoundProviders(
      allProviders.filter((ele) =>
        ele.location.city.toLowerCase().includes(searchTerm)
      )
    );
    //Update map position to searched city
    setPosition([
      foundProviders[0].location.latitude,
      foundProviders[0].location.longitude,
    ]);
    //Zoom in on searched city
    setZoom(10);
  }

  return (
    <div className="App">
      <h1>Bike Rental Providers</h1>
      <MyMap
        providers={searchTerm.length < 1 ? allProviders : foundProviders}
        status={status}
        position={position}
        zoom={zoom}
      />

      <input
        onChange={handleInput}
        value={searchTerm}
        placeholder="Search city"
      ></input>

      <h3>Bike Providers:</h3>
      {
        //Display providers list
        (searchTerm.length < 1 ? allProviders : foundProviders).map((ele) => (
          <li key={ele.id}>
            {ele.name} {ele.location.city} ({ele.location.country})
          </li>
        ))
      }
    </div>
  );
}

export default App;
