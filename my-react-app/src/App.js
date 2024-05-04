import './App.css';
import React, { useState } from 'react';

// Initial candidates data
const initialCandidates = [
  {
    id: 1,
    title: 'Sales BDE',
    status: 'Active',
    link: 'https://tiny.url/asknakdna/',
    name: 'Saurav Singh',
    hour: 3,
    endsAt: '2024-03-11',
    candidates: [
      { id: 1, Name: 'Saurav Singh', email: 'saurav@gmail.com' , behavioral: 8, communication: 7, situationHandling: 9,
      about: 'iekdhf jdgcv dkjhbfv iuefkjd a9ifjxk jkf,m',
      Experience: 'tyegzhdfbn eigjkdzv, uwhjsfzmp; wkSUGJKNRFIKL.RWAFSZ',
      Hobbies: 'uysxgmnn aifhzskn',
      Introduction: 'yirhkg hekgdn hihetkdn uem'
      },
      // ... other candidates ...
    ],
  },
  { id: 1,
   name: 'Candidate A', 
   behavioral: 8,
    communication: 7,
     situationHandling: 9 ,
     about: 'iekdhf jdgcv dkjhbfv iuefkjd a9ifjxk jkf,m',
     Experience: 'tyegzhdfbn eigjkdzv, uwhjsfzmp; wkSUGJKNRFIKL.RWAFSZ',
     Hobbies: 'uysxgmnn aifhzskn',
     Introduction: 'yirhkg hekgdn hihetkdn uem'
    },
  { id: 2, name: 'Candidate B', behavioral: 8, communication: 7, situationHandling: 9 },
  // ... more candidates ...
];

// Dashboard Component
const Dashboard = ({ assignments, selectCandidate }) => {
  return (
    <div className="dashboard">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="assignment">
          <p>{assignment.name}</p>
          <p>{}</p>
          <p>Score: {assignment.behavioral + assignment.communication + assignment.situationHandling}%</p>
          <button onClick={() => selectCandidate(assignment)}>Review</button>
        </div>
      ))}
    </div>
  );
};

// Candidate Profile Component
const CandidateProfile = ({ candidate, onShortlist }) => {
  return (
    <div className="candidate-profile">
      <h3>{candidate.name}</h3>
      <p>Behavioral: {candidate.behavioral}%</p>
      <p>Communication: {candidate.communication}%</p>
      <p>Situation Handling: {candidate.situationHandling}%</p>
      <p> About:{candidate.about}</p>
      <p>  Experience:{candidate.Experience}</p>
      <p> Hobbies:{candidate.Hobbies}</p>
      <p> Introduction:{candidate.Introduction}</p>
      <button onClick={() => onShortlist(candidate)}>Shortlist</button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const selectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const shortlistCandidate = (candidate) => {
    alert(`Shortlisted ${candidate.name}`);
  };

  return (

    <div className="app">
       <div className="app">
      <header className="app-header">
      </header>
      <main className="app-main">
        <section>
          <p>Dashboard</p>
        </section>
        <section className="new-assignment">
          <button className="add-button">+</button>
          <p>New Assignment?</p>
          <p>Select from pre-defined questions to have a quick turnaround</p>
          <button className="create-btn">Create New Assignment</button>
        </section>
      </main>
    </div>
      <Dashboard assignments={candidates} selectCandidate={selectCandidate} />
      {selectedCandidate && (
        <CandidateProfile
          candidate={selectedCandidate}
          onShortlist={shortlistCandidate}
        />
      )}
    </div>
  );
};

export default App;



