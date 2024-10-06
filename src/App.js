import { useState, useEffect } from "react";
import "./App.css";
import GovApi from "./api/GovAPI";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [coor, setCoor] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const datasetId = "d_dbfabf16158d1b0e1c420627c0819168";
      const response = await GovApi.get(`${datasetId}/poll-download`);
      const jsonData = response.data;
      if (jsonData.code !== 0) {
        throw new Error(jsonData.errorMsg);
      }
      const fetchUrl = jsonData.data.url;
      const innerResponse = await axios.get(fetchUrl, { responseType: "text" });

      const allCoordinates = [];
      for (const item of innerResponse.data.features) {
        for (const coor of item.geometry.coordinates[0]) {
          const coordinate = [coor[0], coor[1]];
          allCoordinates.push(coordinate);
        }
      }
      setCoor(allCoordinates);
      console.log("✅ loaded data successfully");
    } catch (error) {
      console.error("🚨 error: ", error.message);
    } finally {
      console.log("🎉 completed");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(coor);

  // const coorArray = data.map((item) => item.geometry.coordinates[0]);
  // for (const item in data) {item.geometry.coordinates[0]}

  // console.log(coorArray);
  return (
    <div className="App">
      <h1>Dengue Clusters List</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {coor.length > 0 && <Map coordinates={coor} />}
      </div>
    </div>
  );
}

export default App;
