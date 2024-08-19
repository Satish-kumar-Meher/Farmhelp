import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate  } from "react-router-dom" 
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
export function SelectCrops({onCropsSelected, updateCropsSelected}) {
    const [crops, setCrops] = useState([]);
    const [selectedCrops, setSelectedCrops] = useState([]);
    const { token } = useAuth();
    const {isLoggedIn} = useAuth()

    const navigate = useNavigate()

    const getCropsdata = async () => {
        try{
            const response = await fetch("http://localhost:4000/api/data/crops",{
                method : "GET",
            })
            if(response.ok){
                const cropsdata = await response.json()
                console.log(cropsdata.data)
                setCrops(cropsdata.data)
            }
        }catch(error){
            console.log(`services frontend error : ${error}`)
        }
    
    }




    useEffect(() => {
        getCropsdata()

    }, []);

    const toggleCropSelection = (crop) => {
        if (selectedCrops.includes(crop.id)) {
            setSelectedCrops(selectedCrops.filter(id => id !== crop.id));
        } else {
            setSelectedCrops([...selectedCrops, crop.id]);
        }
    };

    

    // const handleSubmit = () => {
    //     const selectedCropNames = crops
    //         .filter(crop => selectedCrops.includes(crop.id))
    //         .map(crop => crop.name);
    //     alert('You have selected: ' + selectedCropNames.join(', '));
    // };
    const handleSubmit = async () => {

        if (selectedCrops.length === 0) {
            toast.error("Please select at least one crop.");
            return;
        }
    
        if (selectedCrops.length > 8) {
            toast.error("You can only select up to 8 crops.");
            return;
        }

        if(isLoggedIn){
        try {
            const response = await fetch("http://localhost:4000/api/auth/user/selected-crops", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Use the token from the Auth context
                },
                body: JSON.stringify({ selectedCropIds: selectedCrops }),
            });

            if (response.ok) {
                const result = await response.json();
                toast.success('Crops selected successfully!');
               
                navigate("/selected-crops")
                onCropsSelected()
                updateCropsSelected()
                // updateCropsSelected()
            } else {
                toast.error('Failed to select crops.');
            }
        } catch (error) {
            console.error('Error submitting selected crops:', error);
        }
    } else {
        toast.error("Please login first")
        navigate("/login")
    }
}

    // return (
    //     <div className="App">
    //         <h1>Select Crops</h1>
    //         <div className="crop-container">
    //             {crops.map(crop => (
    //                 <div
    //                     key={crop.id}
    //                     className={`crop-item ${selectedCrops.includes(crop.id) ? 'selected' : ''}`}
    //                     onClick={() => toggleCropSelection(crop)}
    //                 >
    //                     <img src={crop.imgUrl} alt={crop.name} />
    //                     <p>{crop.name}</p>
    //                     {/* <p>{crop.tips.plantselection}</p> */}
    //                 </div>
    //             ))}
    //         </div>
    //         <button onClick={handleSubmit}>Submit</button>

    //     </div>
    // );
    return (
        <div className="App">


  <div className="crop-selection-section">
    <h2>Select Crops</h2>
    <div className="crop-container">
      {crops.map(crop => (
        <div
          key={crop.id}
          className={`crop-item ${selectedCrops.includes(crop.id) ? 'selected' : ''}`}
          onClick={() => toggleCropSelection(crop)}
        >
          <div className="crop-image-container">
            <img src={crop.imgUrl} alt={crop.name} className="crop-image" />
          </div>
          <p className="crop-name">{crop.name}</p>
        </div>
      ))}
    </div>
    <button onClick={handleSubmit} className="add-crops-button">Add Crops</button>
  </div>  
</div>

    )

    
}


