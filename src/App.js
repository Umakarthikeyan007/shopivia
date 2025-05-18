import "./App.css";
import Router from "./routes/Router";
import Header from "./widgets/Header/index.tsx";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
