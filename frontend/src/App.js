import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import MemoirsListPage from './pages/MemoirsListPage'
import MemoirPage from './pages/MemoirPage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path='/' exact component={MemoirsListPage}/>
          <Route path='/memoir/:id' component={MemoirPage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
