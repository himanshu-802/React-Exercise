import React from 'react';
import {add,sub,mul,div} from "./Calc";
function App(){
    return (
        <>
        <ul>
     <li>Sum is { add(4,2) }</li>
     <li>SUb is { sub(4,2) }</li>
     <li>Mul is{ mul(4,2) }</li>
     <li>Div is { div(4,2) }</li>
       </ul>
        </>
    );
}
export default App;

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