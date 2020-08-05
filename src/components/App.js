import React from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Services from '../components/Services'



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/customsoftware" exact component={() => <div>Custom Software</div>} />
          <Route path="/mobileapps" exact component={() => <div>Mobile Apps</div>} />
          <Route path="/websites" exact component={() => <div>Websites</div>} />
          <Route path="/revolution" exact component={() => <div>Revolution</div>} />
          <Route path="/about" exact component={() => <div>About us</div>} />
          <Route path="/contact" exact component={() => <div>Contact us</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
