import logo from "./logo.svg";
import "./App.css";
import CountryDetails from "./Components/CountryDetails";
import ScoreBar from "./Components/ScoreBar";

function App() {
    return (
        <div className="App">
            <div className="page-container">
                <CountryDetails wbValues={[10, 20, 80]} />
            </div>
        </div>
    );
}

export default App;
