import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "AI Chat App",
      description: "A chatbot powered by AI for real-time conversations."
    },
    {
      name: "E-commerce Website",
      description: "An online store with cart and payment integration."
    },
    {
      name: "Fitness Tracker",
      description: "Tracks workouts, calories, and health stats."
    }
  ];
  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
