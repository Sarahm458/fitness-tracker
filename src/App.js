import './App.css';
import WorkoutForm from './Components/WorkoutForm';
import {Routes,Route} from "react-router-dom"
import ProgressDashboard from './Pages/ProgressDashboard';
import GoalsPage from './Pages/GoalsPage';
import NavBar from './Components/NavBar';

function App() {
  return (
   <Routes>
    <Route path="/" element={<NavBar/>}>
      <Route path='/' element={<WorkoutForm/>}/>
      <Route path='/dashboard' element={<ProgressDashboard/>}/>
      <Route path='/goals' element={<GoalsPage/>}/>
    </Route>
   </Routes>
  );
}

export default App;