import "./App.css";
import teamsData from "../src/CollegeBasketballTeams.json";

function Team({
  name,
  city,
  school,
  state,
  tid,
}: {
  name: string;
  city: string;
  school: string;
  state: string;
  tid: number;
}) {
  return (
    <>
      <h2>Mascot: {name}</h2>
      <h3>
        Location: {city}, {state}
      </h3>
      <h3>School: {school}</h3>
    </>
  );
}

function App() {
  return (
    <>
      {teamsData.teams.map((singleTeam, index) => (
        <Team key={singleTeam.tid} {...singleTeam} />
      ))}
    </>
  );
}

export default App;
