import logo from "./logo.svg";
import "./App.css";
import CountryDetails from "./Components/CountryDetails";
import ScoreBar from "./Components/ScoreBar";
import HeaderBar from "./Components/HeaderBar";

const htmlRequest = new XMLHttpRequest();

let requestData = "";

function handleSearch() {
    htmlRequest.open(
        "GET",
        "https://search.worldbank.org/api/v2/wds?format=json&qterm=AG.LND.FRST.ZS&fl=count"
    );
    htmlRequest.send();
    htmlRequest.responseType = "json";
    htmlRequest.onload = () => {
        if (htmlRequest.readyState === 4 && htmlRequest.status === 200) {
            requestData = htmlRequest.response;
            console.log(requestData);
        } else {
            console.log(`Error: ${htmlRequest.status}`);
        }
    };
}

function App() {
    return (
        <div
            className="App"
            style={{ height: window.innerHeight, width: window.innerWidth }}>
            <div className="page-container">
                <HeaderBar />
                <CountryDetails
                    wbValues={[
                        ["a", 10],
                        ["b", 20],
                        ["c", 30],
                        ["d", 40],
                        ["e", 0],
                        ["f", 80],
                        ["g", 90],
                        ["h", 100],
                        ["i", 20],
                    ]}
                />
                <button
                    onClick={handleSearch}
                    style={{ width: "4rem", height: "3rem" }}>
                    Search
                </button>
                <p>{}</p>
            </div>
        </div>
    );
}

export default App;
