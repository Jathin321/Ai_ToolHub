import React from "react";
import { useState,useEffect } from "react";

export default function AiCollections() {

    const [aiData, setAiData] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:2222/api/fetchcollections", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAiData(data); // Update state with fetched data
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Load Data Called");
    loadData();
  }, []); 


  return (
    <>
     <div className="bg-red-200 shadow mt-6 rounded-lg p-6 m-5 border">
      <h3 className="text-gray-600 text-xl font-semibold mb-4" style={{ textAlign: 'center' }}>Animate Video</h3>
      <ul className="flex items-center justify-center space-x-2">
        {/* Story #1 */}

        {/* <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="Sage" />
          </a>
          
          <span className="text-xs font-bold text-black">Sage</span>
        </li> */}

        
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkz2_XgJjde7wBD9x4r8EuD6zUFuobQ6abTj1JFvQOEQZaePqWFyZd10w&s=10" alt="Jett" />
          </a>
          
          <span className="text-xs font-bold text-black">Chat Gpt</span>
        </li>

        {/* Story #3 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="data:image/png;base64,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" alt="Sky" />
          </a>
          
          <span className="text-xs font-bold text-black">Art Bot</span>
        </li>

        {/* Story #4 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="data:image/jpeg;base64,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" alt="Olivia" />
          </a>
          
          <span className="text-xs font-bold text-black">Pikalabs</span>
        </li>

        {/* Story #5 */}
        {/* <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="Julia" />
          </a>
          
          <span className="text-xs font-bold text-black">Julia</span>
        </li> */}

        {/* Story #6 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="data:image/jpeg;base64,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" alt="Hendrick" />
          </a>
          
          <span className="text-xs font-bold text-black">Runway ML</span>
        </li>
      </ul>
      <div className="mb-7" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p className="flex-row" style={{ flex: 1 }}>Generate 50 animated images ideas related to nature photography. Enter one image idea to generate, <br /> then hit create once you have 50 images. Type '/' and select 'animate'. Upload images and select <br /> the motion brush, then press the cursor on the part of the image that you want to animate.</p>
      {/* <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-red-600 text-white shadow-lg mr-8">
        View More
      </button> */}
    </div>
    </div>


    <div className="bg-red-200 shadow mt-6 rounded-lg p-6 m-5 border">
      <h3 className="text-gray-600 text-xl font-semibold mb-4" style={{ textAlign: 'center' }}>Animate Video</h3>
      <ul className="flex items-center justify-center space-x-2">
        {/* Story #1 */}

        {/* <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="Sage" />
          </a>
          
          <span className="text-xs font-bold text-black">Sage</span>
        </li> */}

        
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZABSshixnBZyeHuzyMcH7C1IkTGPsnI1MJ_TuG8yu-rQfcCSU3fUAxHv&s=10" />
          </a>
          
          <span className="text-xs font-bold text-black">Gif Master</span>
        </li>

        {/* Story #3 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAzPdZWiU0v0yMVc0SqI7LAvz1Ny67Nqh-FvjelU_rI-ru-GUbLtDNh3S&s=10" alt="Sky" />
          </a>
          
          <span className="text-xs font-bold text-black">Animate Me</span>
        </li>

        {/* Story #4 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://images.sftcdn.net/images/t_app-icon-m/p/25786e00-12bc-4014-8c1b-eabf0e6a35af/182761507/genius-ai-art-photo-editor-logo" alt="Olivia" />
          </a>
          
          <span className="text-xs font-bold text-black">Pixel Genius</span>
        </li>

        {/* Story #5 */}
        {/* <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" alt="Julia" />
          </a>
          
          <span className="text-xs font-bold text-black">Julia</span>
        </li> */}

        {/* Story #6 */}
        <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sK4jEV4FEb3vkjEmiA_qHAE5NgRFSJttiE5ST848PyEMBtjmsqOfQdqA&s=10" alt="Hendrick" />
          </a>
          
          <span className="text-xs font-bold text-black">Motion Magic</span>
        </li>
      </ul>
      <div className="mb-7" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p className="flex-row" style={{ flex: 1 }}>Generate 50 animated images ideas related to nature photography. Enter one image idea to generate, <br /> then hit create once you have 50 images. Type '/' and select 'animate'. Upload images and select <br /> the motion brush, then press the cursor on the part of the image that you want to animate.</p>
      {/* <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-red-600 text-white shadow-lg mr-8">
        View More
      </button> */}
    </div>
    </div>
    </>
  );
}
