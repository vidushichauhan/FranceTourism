import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const callingExposedApis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // GET request
    fetch('http://localhost:3000/getData')
      .then((response) => response.json())
      .then((data) => {
        console.log('GET Data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
};

export const savingLikedData = function saveDataToMongoDB(data) {
  fetch('http://localhost:3000/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Convert data to JSON string
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.log(data);
    console.error('Error:', error);
  });
}



  
  
  
export default callingExposedApis;


