import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateFor from './pages/AddCreator';
import ShowCreators from './pages/ShowCreators';
import EditCreator from './pages/EditCreator';
import DeleteCreator from './pages/DeleteCreators';
import ViewCreator from './pages/ViewCreator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create-for' element={<CreateFor />} />
          <Route path='/showcreators' element={<ShowCreators />} />
          <Route path='/editcreator/:id' element={<EditCreator />} />
          <Route path='/deletecreator/:id' element={<DeleteCreator />} />
          <Route path='/viewcreator/:id' element={<ViewCreator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


