import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveBar from './components/PerspectiveBar'

function App() {
  return (
    <>
      <CharacterEditor />
      <PerspectiveBar />
      <Footer />
    </>
  );
}

export default App;
