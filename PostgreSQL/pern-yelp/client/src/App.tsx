import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Update from './routes/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id" element={<Detail />} />
          <Route path="/restaurants/:id/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
