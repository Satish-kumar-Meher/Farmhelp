// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import "./SelectedCrops.css"
// import { useAuth } from '../store/auth';



// export function SelectedCrops () {
//     const navigate = useNavigate();
//     const {user} = useAuth()
//     const [crops, setCrops] = useState([]);
// // // console.log(selectedCrops)
// // const matchedCrops = crops.filter(crop => selectedCrops.includes(crop.id));

// //     useEffect(() => {
// //         console.log("Selected Crops:", matchedCrops); // Check if this logs the expected crops
// //     }, [matchedCrops]);
// const getCropsdata = async () => {
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
//     getCropsdata()

// }, []);

// const matchedCrops = crops.filter(crop => user.SelectedCrops.includes(crop.id))
// useEffect(() => {
//     console.log("Selected Crops:", matchedCrops)
// },[matchedCrops])


//     return (
//         <div className="selected-crops-section">
//             <h2>Your Selected Crops</h2>
//             <div className="selected-crop-container">
//                 {matchedCrops.map(crop => (
//                     <div key={crop.id} className="selected-crop-item">
//                         <img src={crop.imgUrl} alt={crop.name} className="selected-crop-image" />
//                         <p className="selected-crop-name">{crop.name}</p>
//                     </div>
//                 ))}
//             </div>
//             <button onClick={() => navigate('/select-crops')} className="add-more-crops-button">+</button>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import "./SelectedCrops.css";
import "./App.css"
import { useAuth } from '../store/auth';
import { SelectCrops } from './SelectCrops';

export function SelectedCrops() {
    // const navigate = useNavigate();
    const { user } = useAuth();
    const [crops, setCrops] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [hasSelectedCrops, setHasSelectedCrops] = useState(false);


console.log(user)
    const getCropsdata = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/data/crops", {
                method: "GET",
            });
            if (response.ok) {
                const cropsdata = await response.json();
                setCrops(cropsdata.data);
            }
        } catch (error) {
            console.log(`Error fetching crops: ${error}`);
        }
    };

    useEffect(() => {
        getCropsdata();
if(user.selectedCrops && user.selectedCrops.length > 0){
    setHasSelectedCrops(true)
}

    }, []);

    // Ensure user.SelectedCrops is defined and is an array
    const matchedCrops = crops.filter(crop => user?.selectedCrops?.includes(crop.id));

    useEffect(() => {
        console.log("Selected Crops:", matchedCrops);
    }, [matchedCrops]);


    

    const handleSelectCropsClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const updateSelectedCrops = () => {
        setHasSelectedCrops(true);
    };

    return (
        <>
        <div className="selected-crops-section">
            <h2>Your Selected Crops</h2>
            <div className="selected-crop-container">
                {matchedCrops.length > 0 ? (
                    matchedCrops.map(crop => (
                        // <>
                        // <div key={crop.id} className="selected-crop-item">
                        //     <img src={crop.imgUrl} alt={crop.name} className="selected-crop-image" />
                            
                        // </div>
                        // <p className="selected-crop-name">{crop.name}</p>
                        // </>
                        <>
                        <div key={crop.id} className="selected-crop-item">
            <div className="selected-crop-image-container">
                <img src={crop.imgUrl} alt={crop.name} className="selected-crop-image" />
            </div>
            <p className="selected-crop-name">{crop.name}</p>
        </div>
                        </>
                    ))
                ) : (
                    <p>No crops selected.</p>
                )}
            </div>
            <button /*onClick={() => navigate('/')}*/ onClick={handleSelectCropsClick} className="add-more-crops-button">+</button>
        </div>
        {showModal && (
            <div className="modal-overlay">
                <div className="modal">
                    <button className="close-button" onClick={handleCloseModal}>X</button>
                    <SelectCrops updateCropsSelected={updateSelectedCrops} />
                </div>
            </div>
        )}
        </>
    );
}
