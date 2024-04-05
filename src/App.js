import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserFront from './componants/userfront';
import UserPanel from './componants/userpanel';
import UserAdd from './componants/UserAdd'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPanel />} />
        <Route path="/userfront" element={<UserFront />} />
        <Route path="/UserAdd" element={<UserAdd />} /> 
      </Routes>
    </Router>
  );
};

export default App;