import React from 'react';
import './App.scss';
import Header from './Header/Header';
import { DeckList } from './DeckList/DeckList';
import { Sidebar } from './Sidebar/Sidebar';

const decks = [
  {
    id: 1,
    title: 'Чебуреки',
    description: 'Колода состоящая только из чебуреков',
    imageUrl: './deck_preview.png'
  },
  {
    id: 2,
    title: 'Беляши',
    description: 'Беляши прямо с забегаловки рядом с вокзалом',
    imageUrl: './deck_preview.png'
  },
  {
    id: 3,
    title: 'Что-то серьёзное',
    description: 'Колода с чем-то серьёзным внутри',
    imageUrl: './deck_preview.png'
  },
  {
    id: 4,
    title: 'Лолы и кеки',
    description: 'Лолы прямо как твои мемы и кеки точно такие же',
    imageUrl: './deck_preview.png'
  }
]

const App: React.FC = () => {
  return (
    <div className="app">
      <Header title="PocketCampaign" />

      <section className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <DeckList decks={decks} />
      </section>
    </div>
  );
}

export default App;
