import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err= useRouteError();  //it is a hook given by react-router-dom
    console.log(err);
    return(
        <div><h1>Oops! Something went wrong</h1>
       <h1> ..............Try After sometime..................</h1>   
        <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default Error;