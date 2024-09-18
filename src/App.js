// import logo from './logo.svg';
// import React, { useState } from "react";
// import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForms from "./components/TextForms";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState("light"); //wether dark mode is enabled or not (lec->12)
//   const [text , setText] = useState("Dark mode enable")
  
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       setText("Light mode enable")
//       document.body.style.backgroundColor = "#5c5757";
//       document.title = "TextUtils - Dark Mode"
      
//     } else {
//       setMode("light");
//       setText("Dark mode enable");
//       document.body.style.backgroundColor = "white";
//        document.title = "TextUtils - Light Mode";
//     }
//   };

  
  
//   //all content in this function is called JSX(HTML +JS ?)
//   // jsx is extention of javascript in which you can write HTML....
//   return (
//     <>
//       {/* <Navbar title="TextUtils1" aboutText="About Text Utils" /> */}

//       {/*here giving title="TextUtils" is passing props */}
//       {/* here type should be matched with given type in Navbar.js 
         
//          Navbar.propTypes ={title :propTypes.string   (TextUtils),
//     aboutText : propTypes.string
//             }  
//       */}
//       <Router>
//         {" "}
//         {/*to use react-router-dom->go to the quick start in react-router lec 16 */}
//         <Navbar
//           title="TextUtils"
//           mode={mode}
//           toggleMode={toggleMode}
//           text={text}
//         />
//         <div className="container my-3">
//           <Routes>{/*  so this is new quick start of v6 router-dom in google by going to quick start you will find old version quick start i took help of chat-gpt in this. */}
//             <Route exact path="/About" element={<About />} />
//             <Route
//              exact  path="/"
//               element={
//                 <TextForms
//                   heading="Enter the text to analyze below"
//                   mode={mode}
//                 />
//               }
//             />
//             {/* here if we use only 'path' instead of 'exact path' it won't give error but react will match partial path that means (12:00 -> lec 16)
//             /home(for component 1) and /home/comp for(component 2) here for both path react will nevigate us to component1 though both path are for diffrent component */}
//           </Routes> 
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

/*my-3 -> bootstrap class for margin*/


//----------------------------------------------------------------------------------------------------------------------------------------
//to export into github

import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wether dark mode is enabled or not (lec->12)
  const [text, setText] = useState("Dark mode enable");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Light mode enable");
      document.body.style.backgroundColor = "#5c5757";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setText("Dark mode enable");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };

  //all content in this function is called JSX(HTML +JS ?)
  // jsx is extention of javascript in which you can write HTML....
  return (
    <>
      {/* <Navbar title="TextUtils1" aboutText="About Text Utils" /> */}

      {/*here giving title="TextUtils" is passing props */}
      {/* here type should be matched with given type in Navbar.js 
         
         Navbar.propTypes ={title :propTypes.string   (TextUtils),
    aboutText : propTypes.string
            }  
      */}
      
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <div className="container my-3">
          
           
                <TextForms
                  heading="Enter the text to analyze below"
                  mode={mode} />
        </div>
    </>
  );
}

export default App;
