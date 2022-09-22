import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
// CARA PEMBUATAN NAVBAR 1 (DENGAN CONST)
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h1>My Blog</h1>
//       <div className="links">
//         <a href="/">Home</a>
//         <a href="/create">New Blog</a>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Rajendra Rakha</h2>
    </div>
  );
}

export default App;
