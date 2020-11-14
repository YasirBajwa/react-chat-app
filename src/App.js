import React from 'react';
import AppRouter from './config/router';
// import Home from './containers/Home/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    );
  }
}
export default App;
