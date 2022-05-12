import HomePortfolio from "./HomePortfolio";
import { useEffect } from "react";

const Portfolio = () => {
    useEffect(()=>{
        document.title = 'My portfolio'
    })
    return ( 
        <>
            <HomePortfolio />
        </>
     );
}
 
export default Portfolio;