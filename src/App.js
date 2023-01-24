import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Component/Menu";
import CreateSurvey from './Component/CreateSurvey';
import Published from './Component/Published'
import Logo from "./logo.png";

function App() {
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  return (
    <div className="col-md-10 offset-md-1 col-12 text-center">
      <img className="col-md-6" alt="logo" src={Logo} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path="/create" element={<CreateSurvey surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions}/>}/>
          <Route path="/publish" element={ <Published surveyQuestions={surveyQuestions}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
