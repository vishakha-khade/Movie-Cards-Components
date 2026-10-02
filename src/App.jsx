import { useState } from 'react'
import Movie from './components/Card';
import './App.css'
import data from './data.json';

function App() {
  console.log(data);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px", backgroundColor: "#bdb9b9" }}>Movie Cards</h1>
    <div className="card-container">
        {data.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
    </div>
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#bdb9b9" }}>@ 2026 Movie Cards with React reusable components.</footer>
    </div>
  )
}

export default App
