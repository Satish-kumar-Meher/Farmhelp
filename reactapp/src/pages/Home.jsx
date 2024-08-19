import { useEffect, useState } from "react";
import "./home2.css"
import "./selectCrops.css"
import "./footer.css"
import "./benifits.css"
import { SelectCrops } from "./SelectCrops";
import { useAuth } from "../store/auth"


export const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [hasSelectedCrops, setHasSelectedCrops] = useState(false);

    const handleSelectCropsClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const {isLoggedIn,token} = useAuth()

// Fetch user data to check if they have selected crops
const checkSelectedCrops = async () => {
    if (isLoggedIn) {
        try {
            const response = await fetch("http://localhost:4000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const result = await response.json();
                if (result.userData.selectedCrops && result.userData.selectedCrops.length > 0) {
                    setHasSelectedCrops(true);
                }
            }
        } catch (error) {
            console.error('Error fetching selected crops:', error);
        }
    }
};

useEffect(() => {
    checkSelectedCrops();
}, [isLoggedIn]);


// Callback to update hasSelectedCrops
const updateSelectedCrops = () => {
    setHasSelectedCrops(true);
};
    return (
        <>
        <div className={`image-container ${showModal ? 'blurred' : ''}`}>
        <div className="text-container">
            <h1>Welcome to <br/> FarmHelp</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus repellendus facere! Error consectetur quae eos officiis molestias laborum recusandae?</p>
            <div className="btn-container">
                <button className="btn-1"><a href="/about">About</a></button>
                <button className="btn-2" onClick={handleSelectCropsClick}>Select Crops</button>
                {isLoggedIn && hasSelectedCrops && (
                            <button className="btn-3"><a href="/selected-crops">Explore Crops</a></button>
                        )}
            </div>
        </div>
    </div>
    {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={handleCloseModal}>X</button>
                        <SelectCrops onCropsSelected={updateSelectedCrops} />
                    </div>
                </div>
            )}

<div className="benefits-section">
        <h2 className="section-heading">See Our Benefits</h2>
        <div className="benefits-container">
          <div className="benefit-box box1">
            <div className="colour-box"></div>
            <h2>Cultivation Tips</h2>
            <p>Small paragraph about benefit 1.</p>
            <div className="color"></div>
          </div>
          <div className="benefit-box box2">
          <div className="colour-box"></div>
            <h2>Fertilizer Calculator</h2>
            <p>Small paragraph about benefit 2.</p>
          </div>
          <div className="benefit-box box3">
          <div className="colour-box"></div>
            <h2>Disease Diagnosis</h2>
            <p>Small paragraph about benefit 3.</p>
          </div>
        </div>
        <div className="benefits-container lower-row">
          <div className="benefit-box box4">
          <div className="colour-box"></div>
            <h2>Community</h2>
            <p>Small paragraph about benefit 4.</p>
          </div>
          <div className="benefit-box box5">
          <div className="colour-box"></div>
            <h2>Dukaan</h2>
            <p>Small paragraph about benefit 5.</p>
          </div>
        </div>
      </div>


             <div className="footer-div">
    <footer className="footer">
        <div class="footer-column">
            <img src="path/to/company-logo.png" alt="Company Logo" class="footer-logo"/>
            <p class="footer-text">Your Company Slogan or Tagline</p>
            <p class="footer-text copyright">©2023 All Rights Reserved.</p>
        </div>
    
        <div class="footer-column">
            <h4>Site Links</h4>
            <ul class="footer-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    
        <div class="footer-column">
            <h4>Contact Us</h4>
            <p>Location: 123 Farm Road, Agroville</p>
            <p>Email: contact@farmhelp.com</p>
            <p>Phone: +123 456 7890</p>
        </div>
   
        <div class="footer-column">
            <h4>Follow Us</h4>
            <p class="social-media-paragraph">Connect with us on social media:</p>
            <div class="social-media">
                <a href="#">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h2v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)"><rect width="512" height="512" fill="#000" rx="60"></rect><path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412h222.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32h266.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                </a>
                <a href="#">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path></svg>
                </a>
                <a href="#">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg>
                </a>
                <a href="#">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" id="whatsapp" x="0" y="0" version="1.1" viewBox="0 0 100 100" xml:space="preserve"><g id="Graphics-_x2F_-App-Icons-_x2F_-WhatsApp"><g id="Icon_6_"><linearGradient id="Background_13_" x1="50.723" x2="50.723" y1="627.233" y2="625.746" gradientTransform="matrix(60 0 0 -60 -2993 37639)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#62FA7F"></stop><stop offset=".686" stop-color="#22CC40"></stop><stop offset="1" stop-color="#05B723"></stop></linearGradient><path id="Background_7_" fill="url(#Background_13_)" d="M28.4 5H26c-2 .1-4.6.2-5.7.5-1.8.4-3.5.9-4.9 1.6-1.6.8-3.1 1.9-4.4 3.2-1.3 1.3-2.3 2.7-3.2 4.4-.7 1.4-1.3 3.1-1.6 4.8-.2 1.2-.4 3.8-.5 5.8V74c.1 2 .2 4.6.5 5.7.4 1.8.9 3.5 1.6 4.9.8 1.6 1.9 3.1 3.2 4.4 1.3 1.3 2.7 2.3 4.4 3.2 1.4.7 3.1 1.3 4.8 1.6 1.2.2 3.8.4 5.8.5h48.7c2-.1 4.6-.2 5.7-.5 1.8-.4 3.5-.9 4.9-1.6 1.6-.8 3.1-1.9 4.4-3.2 1.3-1.3 2.3-2.7 3.2-4.4.7-1.4 1.3-3.1 1.6-4.8.2-1.2.4-3.8.5-5.8V25.3c-.1-2-.2-4.6-.5-5.7-.4-1.8-.9-3.5-1.6-4.9-.8-1.6-1.9-3.1-3.2-4.4C88.4 9 87 8 85.3 7.1c-1.4-.7-3.1-1.3-4.8-1.6-1.2-.2-3.8-.4-5.8-.5H28.4z"></path><path id="WhatsApp-Icon" fill="#fff" d="M66.6 54.4c-.8-.4-4.8-2.3-5.5-2.6-.7-.3-1.3-.4-1.8.4s-2.1 2.6-2.5 3.1c-.5.5-.9.6-1.7.2-.8-.4-3.4-1.2-6.5-3.9-2.4-2.1-4-4.7-4.5-5.5-.5-.8 0-1.2.4-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.2-.4-1.8-4.3-2.5-5.9-.7-1.5-1.3-1.3-1.8-1.4h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.7-2.8 6.6 0 3.9 2.9 7.6 3.3 8.2.4.5 5.7 8.5 13.7 11.9 1.9.8 3.4 1.3 4.6 1.7 1.9.6 3.7.5 5.1.3 1.5-.2 4.8-1.9 5.4-3.7.7-1.8.7-3.4.5-3.7-.4-.4-.9-.6-1.7-1M51.3 75c-4.8 0-9.4-1.3-13.5-3.7l-1-.6-10 2.6 2.7-9.7-.6-1c-2.6-4.2-4-9-4-14 0-14.5 11.9-26.3 26.5-26.3C58.3 22.3 65 25 70 30c5 5 7.7 11.6 7.7 18.6C77.7 63.1 65.8 75 51.3 75m22.5-48.8c-6-6-14-9.3-22.5-9.3-17.5 0-31.8 14.2-31.8 31.7 0 5.6 1.5 11 4.2 15.8l-4.5 16.4L36 76.4c4.6 2.5 9.9 3.9 15.2 3.9C68.7 80.3 83 66.1 83 48.6c.1-8.4-3.2-16.4-9.2-22.4"></path></g></g></svg>
                </a>
            </div>
        </div>
    </footer>
    </div>
    
        </>
    )
}