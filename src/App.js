import Navbar from './Navbar';
import Home from './Home';
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
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}
 
export default App; // We always export so that we can use it in other files
