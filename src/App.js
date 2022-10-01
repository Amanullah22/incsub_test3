import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainComponent from './components';
import EventDetails from './components/EventDetails';
import EventForm from "./components/EventForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/create" element={<EventForm />} />
        <Route path="/event" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
