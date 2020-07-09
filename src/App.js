import React, {useState} from 'react';
// import Accordion from './components/Accordion';
import Translate from './components/Translate';
import DropDown from './components/DropDown';
import Search from './components/Search';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
const OPTIONS = [
  {label: 'color of Red', value: 'Red'},
  {label: 'Color of blue', value: 'Blue'},
  {label: 'Color of green', value: 'green'},
];
const items = [
  {title: 'why do we use react', details: 'its fun '},
  {title: 'why life is hard', details: "because it's meant to be"},
  {title: 'why am i single', details: 'because of my own good'},
];

function App() {
  const [selected, setSelected] = useState(OPTIONS[0]);

  // const getPath1 = () => {
  //   if (document.location.pathname === '/') {
  //     return <Translate />;
  //   }
  //   if (document.location.pathname === '/search') {
  //     return <Search />;
  //   }
  // };

  // return <div>{<Search />}</div>;
  return (
    <div>
      <div style={{padding: '40px'}}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Translate />
            </Route>

            <Route path="/search">
              <Search />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>

        {/* <DropDown
        options={OPTIONS}
        setSelected={setSelected}
        selected={selected}
      /> */}
        {/* <Translate /> */}
      </div>
    </div>
  );
}

export default App;
