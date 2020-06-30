import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Para from './Para';
import Order from './order';
ReactDOM.render(
<>
{/* <Heading/> */}
<Heading></Heading>
<Para/>
<Order/>
</>,
document.getElementById("root")
);














// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let greeting='';
// let curDate=new Date();
// let cssStyle={
//   color:'green'
// }
// curDate=curDate.getHours();
// if(curDate>=1 && curDate<=11){
//   greeting+='Good Morning';
//   cssStyle.color="green";
// }
// else if(curDate>=12 && curDate<19){
//   greeting+='Good Afternoon';
//   cssStyle.color='orange';
// }
// else{
//   greeting+='Good Night';
//   cssStyle.color='black';
// }

// ReactDOM.render(
//   <>
//    <div>
//      <h1>
//        Hello sir, 
//        <span style={cssStyle}>{greeting}</span>
//     </h1>
//    </div>
//   </>
//   ,document.getElementById('root')
// );























// import React from 'react';
// import ReactDOM from 'react-dom';

// const name='vinod';
// const img1='https://picsum.photos/325/300'; 
// const img2='https://picsum.photos/250/300'; 
// const img3='https://picsum.photos/300/300'; 
// const links='https://www.thapatechnical.com';
// ReactDOM.render(
//     <>
//     <h1 contentEditable='true'> My name is {name}</h1>
//     <img src={img1} alt='random'/> 
//     <img src={img2} alt='random'/>
//     <a href={links} target="_thapa">
//       <img src={img3} alt="random"/>
//     </a>
//     </>
//     ,document.getElementById("root")
// );










// import React from 'react';
// import ReactDOM from 'react-dom';
// //ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback func');
// const flname="Ramesh Bhai";
// const fname="bittu";
// const lname="bhai";
// ReactDOM.render(
//     <>
//     <h1>my name is {3/3}</h1>
//     <h1>{`my first name is  ${fname} and my last name is  ${lname}`}</h1>
//     <h1>my name is  {fname} {lname}</h1>
//     <p>{5*5}</p>
//     </>
//     ,document.getElementById('root'));

// const currDate= new Date().toLocaleDateString();
// const currTime= new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1>{`Hello, My Name is ${fname}`}</h1>
// <p>{`Current Date is = ${currDate}`}</p>
// <p>{`Current Time is = ${currTime}`}</p>
// </>,
// document.getElementById("root"));