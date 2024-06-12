import React from 'react'
import { useState, useEffect, } from 'react'
import axios from 'axios'


const Mainnav = ({userData}) => {

  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem('authToken'); // Assuming you're storing the token in local storage
  //   console.log(token);

  //   const fetchUserData = async () => {
  //     try {
  //       // Send a GET request to fetch user data
  //       const res = fetch('https://roomie-app-1.onrender.com/auth/user', {
  //         method:'GET',
  //         credentials:'include',
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });

  //       // Check if the response is successful
  //       if (res.status !== 200) {
  //         throw new Error('Failed to fetch user data');
  //       }

  //       // Set the user data
  //       setUserData(res.data.data); // Assuming the user data is nested under `data` key
  //     } catch (error) {
  //       console.error(error);
  //       // Handle error
  //     }
  //   };

  //   if (token) {
  //     fetchUserData();
  //   }
  // }, []);

  return (
    <div>
        <nav className="bg-blue-700 flex justify-between items-center
                         px-6 p-3 border-b-2 border-white                                             
                         ">
          <div className="font-semibold">
            <a href="">Logo</a>
          </div>
          <div className="flex gap-4 items-center min-w-6">
            <div className="rounded-full">
              <img src="/images/react.svg" alt="userPhoto" className="rounded-full h-7 w-7"/>
            </div>
            <div>
              <h5>{userData.username}</h5>
            </div>
            <div>
              <button>
                logout
              </button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Mainnav
