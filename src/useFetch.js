import {useState, useEffect } from 'react';


const useFetch = (url) => { // custom hooks need to start with 'use' keyword. Else they wont work.
    const [data,setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // This is a way to run code for every render(gets fired on every render). We dont store it in a constatnt cuz it does not return anything
        // We can do tasks like fetching data or authenticating services.
        // Beware of changing the state inside a useEffect. This is cause a cascading loop
        const abortCont = new AbortController();


        fetch(url,{signal: abortCont.signal})
            .then((res)=>{
                console.log(res);
                if(!res.ok){
                    // response is not okay. SO we throw an error.
                    throw Error('Could not fetch data from the resource'); // When we throw this error, it is caught in the .catch block
                }
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                setData(data);
                setError(null);
                setisPending(false);
            })
            .catch((err)=>{
                if(err.name === "AbortError"){
                    console.log("Fetch aborted");
                }else{
                    setisPending(false);
                setError(err.message);
                }
                
            });

            return () => abortCont.abort();
    },[url]);

    return {data, isPending, error}
}

export default useFetch;