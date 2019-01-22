import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import data from './data';

import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import './styles.css';

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dustin's Trinkets</h1>
          <div className="nav-links">
            {/* Build a link that takes me to the '/' */}
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </nav>
        {/* Home route - renders a Home component, at the path '/' */}
        <Route exact path="/" component={Home} />
        {/* shop route - renders a Shop component, at the path '/shop' */}
        <Route
          exact
          path="/shop"
          render={props => <Shop {...props} itemList={this.state.items} />}
        />
        {/* {...props} => same as history={props.history} match={props.match} location={props.location}*/}
        <Route
          path="/shop/:itemId"
          render={props => <Item {...props} itemList={this.state.items} />}
        />
        {/* the : tells react-router that this is a param */}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
