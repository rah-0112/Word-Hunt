import './App.css';
import { useEffect, useState, } from 'react';
import axios from 'axios';
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './Components/Header/Header';
import Definitions from './Components/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';

function App() {

  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");
  const [category, setcategory] = useState("en");
  const [lightmode, setlightmode] = useState(false);

  const dictionaryApi = async() => {
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        console.log(data);
        setmeanings(data.data);
      } catch (error) {
        console.log(error);
      }
  }

  console.log(meanings);

  useEffect(() => {
      dictionaryApi();
  }, [word,category])

  const Darkmode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div 
      className="App"
      style={{ 
        height: "100vh", 
        backgroundColor: lightmode ? "#fff" : "#282C34", 
        color: lightmode ? "black": "white", 
        transition: "all 0.5s linear",
      }} 
    >
      <Container 
        maxWidth='md'
        style={{ display: "flex", flexDirection: "column", height: "100vh" , justifyContent: "space-evenly"}}
      >
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightmode ? "Dark": "Light"} Mode</span>
          <Darkmode checked={lightmode} onChange={() => setlightmode(!lightmode)}/>
        </div>
        <Header 
          category={category} 
          setcategory={setcategory} 
          word={word} 
          setword={setword}
          lightmode={lightmode}
        />
        {meanings &&(
          <Definitions 
            word={word} 
            meanings={meanings} 
            category={category} 
            lightmode={lightmode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
