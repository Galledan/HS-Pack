import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState([])
  const [pack, setPack] = useState([])


function getData(setName) {

  if (setName !== null) {
  const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/' + setName,
    params: {collectible: "1"},
    headers: {
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '68244ba06cmsh6bb6ed9472833aap140085jsnaf0a73634369'
    }
  };
  
  axios.request(options).then(function (response) {
    setData(response.data)
  })
                      }
 } 

 function showData() {
  console.log(data);
}
  return (
    <div>
      <select onChange={(e) => getData(e.target.value)} name="sets" id="sets">
        <option value="" disabled selected>Select Set</option>
        <option value="Naxxramas">Curse of Naxxramas</option>
        <option value="Goblins vs Gnomes">Goblins vs Gnomes</option>
      </select>
        <button onClick={showData}> show Data</button>
        {data !== undefined && <button>show Pack</button>}
    </div>
  )
}

export default Main;
