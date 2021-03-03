import {useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [name, setName] = useState('harsha'); //useState hook
    const [age, setAge] = useState(25)
    const [blogs,setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true)
;    
    const [nameo,setNameo] = useState('harsha');
    const handleClick = (e) => {             
        setName('Siddu');
        setAge(30);
    }

    const secondClick = (name,e) =>{
        console.log("Hello "+name,e.target);
    }

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        // This is a way to run code for every render(gets fired on every render). We dont store it in a constatnt cuz it does not return anything
        // We can do tasks like fetching data or authenticating services.
        // Beware of changing the state inside a useEffect. This is cause a cascading loop
        fetch('http://localhost:8000/blogs')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                setBlogs(data);
                setisPending(false);
            })
    },[]); // The [] denotes depenedencies for useEffect(). If it's empty, it only runs useEffect just once(ie the initial render). If the state changes later, it won't run it again
    // the [] brackets are used to name the dependencies for the useEffect(). So basically, the useEffect looks for changes in the state of nameo. If the nameo changes, then useEffect is invoked.
    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => {
                secondClick('Harsha',e)
            }}>Click me Again</button> */}

            {/* We need to always put a key property as it allows react to keep track of data */}
            {/* Props is way to pass data from one component ( Parent to Child) component */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs!!" handleDelete={handleDelete} />             */}
            {/* <button onClick={() => setNameo('Siddu')}>Change Name</button> */}            
        </div>
      );
}
 
export default Home;