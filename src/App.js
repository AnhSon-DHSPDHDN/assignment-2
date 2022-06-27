import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { ROUTES } from './constants/routes';
import MainLayout from './layouts/mainLayout';
import AllTask from './pages/allTask';
import CreateTask from './pages/createTask';
import DoingTask from './pages/doingTask';
import DoneTask from './pages/doneTask';
import NewTask from './pages/newTask';

function App() {
  return (
    <Router>
      <Header />
      <MainLayout>
        <>
          <Sidebar />
          <Switch>
            <Route exact={ROUTES.ALL_TASK.exact} path={ROUTES.ALL_TASK.path} component={AllTask} />
            <Route exact={ROUTES.NEW_TASK.exact} path={ROUTES.NEW_TASK.path} component={NewTask} />
            <Route exact={ROUTES.DOING_TASK.exact} path={ROUTES.DOING_TASK.path} component={DoingTask} />
            <Route exact={ROUTES.DONE_TASK.exact} path={ROUTES.DONE_TASK.path} component={DoneTask} />
            <Route exact={ROUTES.CREATE_TASK.exact} path={ROUTES.CREATE_TASK.path} component={CreateTask} />
          </Switch>
        </>
      </MainLayout>
    </Router>
  );
}

export default App;
