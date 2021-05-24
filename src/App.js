import "./App.css";
import AutoReview from "./components/autoReview";
import BiologyToday from "./components/biologyToday";

function App() {
  return (
    <div className="App">
      <img
        className="coolLogo"
        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
        alt="my really cool logo"
      />
      <header className="App-header">
        <p>My really cool blog site</p>
      </header>
      <AutoReview />
      <BiologyToday />
    </div>
  );
}

export default App;
