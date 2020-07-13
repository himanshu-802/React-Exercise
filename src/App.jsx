import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';
import Logo from './logo';

const App= ()=>{
    return(
        
    <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
        <Logo/>
        {/* {Sdata.map(ncard)}  */}
        
        { Sdata.map( (val, index) => {

            console.log('this is index number ' + index);
            return(                
            <Card
            key={val.id}
            imgsrc={val.imgscr}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />

            );
        })}
    </>
)};
export default App;


// import React from 'react';
// import {add,sub,mul,div} from "./Calc";
// function App(){
//     return (
//         <>
//         <ul>
//      <li>Sum is { add(4,2) }</li>
//      <li>SUb is { sub(4,2) }</li>
//      <li>Mul is{ mul(4,2) }</li>
//      <li>Div is { div(4,2) }</li>
//        </ul>
//         </>
//     );
// }
// export default App;

// import React from "react";
// import Header from "./Heading";
// import Para from "./Para";
// import Order from "./order";

// function App(){
//     return(
//         <>
//         <Header/>
//         <Para/>
//         <Order/>
//         <Header/>
//         </>
//     )

// }
// export default App;