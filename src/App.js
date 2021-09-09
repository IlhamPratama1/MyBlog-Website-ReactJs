import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './views/home';
import Header from './views/templates/navbar';
import Footer from './views/templates/footer';
import GameDetail from './views/project/gameDetail';
import WebsiteDetail from './views/project/websiteDetail';

function App() {
  return (
    <div>
        <Router>
          <React.StrictMode>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project/game/:slug" component={GameDetail} />
              <Route exact path="/project/website/:slug" component={WebsiteDetail} />
            </Switch>
            <Footer />
          </React.StrictMode>
        </Router>
    </div>
  );
}

export default App;
