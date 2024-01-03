import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>About Componrnt</h1>
        <Outlet/>
        </>
    );
};

export default About;