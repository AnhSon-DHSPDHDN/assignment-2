import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainLayout from './layouts/mainLayout';

function App() {
  return (
    <Router>
      <Header />
      <MainLayout>
        <>
          <Sidebar />
          <div>helolo</div>
        </>
      </MainLayout>
    </Router>
  );
}

export default App;
