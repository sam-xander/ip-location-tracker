import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Map from "./components/Map";

function App() {
  const [ipAddress, setIpAddress] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    setApiKey(import.meta.env.VITE_API_KEY);
  }, []);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
        );
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (ipAddress) {
      fetchIpData();
    }
  }, [ipAddress]);

  return (
    <>
      <Header setIpAddress={setIpAddress} />
      <Info data={ipData} />
      <Map data={ipData} />
    </>
  );
}

export default App;
