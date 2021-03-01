import {useState } from 'react';
import BlogList from './BlogList'

const Home = () => {

    const [name, setName] = useState('harsha'); //useState hook
    const [age, setAge] = useState(25)
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
 
    const handleClick = (e) => {
        // console.log("Hello Guys");
        // console.log(e)        
        setName('Siddu');
        setAge(30);
    }

    const secondClick = (name,e) =>{
        console.log("Hello "+name,e.target);
    }

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

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
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's Blogs!!" handleDelete={handleDelete} />
        </div>
      );
}
 
export default Home;