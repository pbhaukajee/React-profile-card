import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/pbhk.jpg" alt="Pri" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Priyanka Bhaukajee</h1>
      <p>
        Full stack web developing student at Udemy. When not coding, I like to
        cook delicious nepali and intercontinental food and to enjoy spending
        time with friends.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((data) => (
        <Skill skill={data.skill} color={data.color} level={data.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// <div className="skill-list">
//   <Skill skill="HTML+CSS" emoji="💪" color="pink" />
//   <Skill skill="Javascript" emoji="💪" color="orangered" />
//   <Skill skill="React" emoji="✌️" color="orange" />
//   <Skill skill="Next.Js" emoji="👶" color="lightblue" />
//   <Skill skill="Web design" emoji="💪" color="yellow " />
//   <Skill skill="Git and GitHub" emoji="👍" color="green" />
// </div>
