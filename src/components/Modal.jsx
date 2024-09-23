// src/components/Modal.jsx
import React from "react";
import modalImage from "../assets/images/confusedHD.png";

export default function Modal({ toggler }) {
  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-75 z-10"></div> */}
      <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
      {/* Modal Content */}
      <div className="relative bg-black p-8 z-20 mx-8 opacity-95  my-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={toggler} // Trigger the toggler to close the modal
            className="border-2 text-red-900 px-4 m-4"
          >
            x
          </button>
        </div>

        {/* Modal Body */}
        <div>
          {/* <img
            className="w-full"
            src={modalImage}
            alt="Sunset in the mountains"
          /> */}
          <div className="flex justify-between px-6 py-1">
            <div className="font-bold text-xl">
              Unlock Lingo Translator:
              <div className="font-thin text-lg px-3 ">Gen Z Edition</div>
            </div>
          </div>

          <div className="flex justify-around items-center px-2 py-1"></div>
          <div className="flex justify-around items-center px-2 py-1">
            <button className="border-2 px-2 py-1 rounded font-bold font-mono text-lg">
              Lock in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
