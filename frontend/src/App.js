// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
// import products from './data/products.js'
import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'


import VideoGamesPage from './pages/VideoGamesPage.js';


// If your schema requires SHORT data input, then use the TABLE design.
import EditVideoGamePageTable from './pages/EditVideoGamePageTable.js';
import AddVideoGamePageTable from './pages/AddVideoGamePageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [videoGame, setVideoGameToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img 
              src="android-chrome-192x192.png"
              alt="The letters 'J' and 'L' representing the initials of the website's creator"
              title="© 2023 Jordan Lapp"
            />
            <h1>Jordan Lapp</h1>
            <p>Web Dev Portfolio</p>
            <p><a href="https://github.com/Jordanlapp7" target="_blank" rel="noopener noreferrer">Github</a></p>
          </header>
          <Navigation />
          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/videogames" element={<VideoGamesPage setVideoGame={setVideoGameToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddVideoGamePageTable />} /> 
                    <Route path="/update" element={<EditVideoGamePageTable videoGameToEdit={videoGame} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Jordan Lapp</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;