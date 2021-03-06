
import Header from './Header';
import './App.css';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
     
    <Router>
    
       <Switch>
       <Route path="/chat/:person">
           <Header backButton='/chat' />
           <ChatScreen/>
           
         </Route>
         <Route path="/chat">
           <Header backButton='/' />
           <Chats/>
         </Route>
         <Route path="/">
          <Header/>
           <TinderCards/>
           <SwipeButtons />
         </Route>
       </Switch>
        {/* <TinderCards/>
    <SwipeButtons /> */}

     {/* chat screen */}
     {/* individual chat screen */}
    </Router>
   
    </div>
  );
}

export default App;
