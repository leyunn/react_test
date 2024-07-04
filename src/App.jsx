import "./App.css";
import score1520 from "../public/1520Score.png";
import act26 from "../public/ACT26.png";
function App() {
  return (
    <div className="app">
      <main>
        <div className="AIPredictedScore">
          <h2>
            AI Predicted Score <span></span>
          </h2>
          <div>
            <img src={score1520} />
            <p>
              SAT ACT: <img src={act26} />{" "}
            </p>
          </div>
        </div>
        <div className="graph">
          <div className="performanceTracker">performanceTracker</div>
          <div className="ScoreDistribution">scoreDistribution</div>
        </div>
      </main>
      <aside>pixie</aside>
    </div>
  );
}

export default App;
