import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import { DeckList } from './DeckList/DeckList';
import { Sidebar } from './Sidebar/Sidebar';
import { DeckCreate } from './DeckCreate/DeckCreate';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header title="PocketCampaign" />

        <section className="content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <Route exact path="/" render={() => <Redirect to="/decks" />} />
          <Route exact path="/decks" component={DeckList} />
          <Route path="/decks/create" component={DeckCreate} />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
