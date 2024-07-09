import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Hello there</h1>
        <Header></Header>
        <MovieGrid></MovieGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
