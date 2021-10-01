import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Desert from './components/Desert';
import Entries from './components/Entries';
import Appetizer from './components/Appetizer';
// import './style.css';
import axios from 'axios';

export default function App() {
  // Set initial state for appetizers, entrees, and desserts.
  const [appetizers, setappetizers] = useState([]);
  const [entrees, setentrees] = useState([]);
  const [desserts, setdesserts] = useState([]);

  const url = 'https://images.sccodes.org/react-assets/majestic-thai-menu.json';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      console.log(result.data);
      setappetizers(result.data);
      setdesserts(result.data);
      setentrees(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Banner /> */}
      <Appetizer appetizers={appetizers} />
      <Entries entrees={entrees} />
      <Desert desserts={desserts} />
    </div>
  );
}
