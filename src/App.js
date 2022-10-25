import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainComponent from './components';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </div>
  );
}

export default App;
