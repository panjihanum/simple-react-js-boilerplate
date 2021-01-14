import './App.css';
import './i18n';
import React from "react";
import LanguageSelector from './components/LanguageSelector';
import Home from './containers/HomePage';
import Error404 from './containers/Error404Page';
import { Route, Switch } from 'react-router-dom';
import { Messages } from './utils/messages';
import { MessageConstant } from './constant';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
        {Messages(MessageConstant.hello_world)}
        <Switch>
            <Route path="/" component={Home} exact />
            <Route component={Error404} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
