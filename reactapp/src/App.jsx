// import {BrowserRouter, Routes, Route } from "react-router-dom"
// import { Register } from "./pages/Register"
// // import { Home } from "./pages/Home"
// import { Navbar } from "./components/Navbar"
// import { Login } from "./pages/login"
// import { Logout } from "./pages/Logout"
// import { Home } from "./pages/Home"
// import { SelectCrops } from "./pages/SelectCrops"
// import { SelectedCrops } from "./pages/SelectedCrops"
// import { useState } from "react"

// export const App = () => {

//   const [selectedCrops, setSelectedCrops] = useState([]);
//   const [crops, setCrops] = useState([]);


//   const getCropsdata = async () => {
//     try{
//         const response = await fetch("http://localhost:4000/api/data/crops",{
//             method : "GET",
//         })
//         if(response.ok){
//             const cropsdata = await response.json()
//             console.log(cropsdata.data)
          
//             setCrops(cropsdata.data)
//         }
//     }catch(error){
//         console.log(`services frontend error : ${error}`)
//     }

// }




// useEffect(() => {
//     // fetch('http://localhost:5000/api/data/crops')
//     //     .then(response => response.json())
//     //     .then(data => setCrops(data));
//     getCropsdata()

// }, []);




//   const handleCropsSelected = (selectedCropsIds) => {
//       setSelectedCrops(selectedCropsIds);
//   };
//     return (
//      <>
     
//      <BrowserRouter>
//      <Navbar/>
//      <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/register" element={<Register/>} />
//       <Route path="/login" element={<Login/>} />
//       <Route path="/logout" element={<Logout/>} />
//       <Route path="/select-crops" element={<SelectCrops onCropsSelected={handleCropsSelected} />} />
//       <Route path="/selected-crops" element={<SelectedCrops selectedCrops={selectedCrops} crops={crops} />} />
//      </Routes>
//      </BrowserRouter>
//      </>
//     )
//   }
  
//   export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/login";
import { Logout } from "./pages/Logout";
import { Home } from "./pages/Home";
import { SelectCrops } from "./pages/SelectCrops";
import { SelectedCrops } from "./pages/SelectedCrops";

export const App = () => {
    

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/select-crops" element={<SelectCrops />} />
                    <Route path="/selected-crops" element={<SelectedCrops />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
