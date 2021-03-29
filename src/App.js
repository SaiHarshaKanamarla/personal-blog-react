import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
// The function name must always start with a capital letter.
function App() {
  // const title = "Harsha's Personal Blog";
  // const likes = 50;
  // const person = {
  //   name: 'yoshi',
  //   age:30
  // };
  // const link = "http://www.google.com"

  // return (
  //   <div className="App">
  //     <div className="content">
  //       <h1>{title}</h1>
  //       <p>Liked {likes} times</p>

  //       <p>{10}</p>
  //       <p>{"hello ppl"}</p>
  //       <p>{Math.random()*10}</p>

  //       <a href={link}>google</a>
  //     </div>
  //   </div>
  // );
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
 
export default App; // We always export so that we can use it in other files
