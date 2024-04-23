import React from "react";
import logo from "../../assets/logo.jpg";
const Education = () => {
  return (
    <>
      <h1 className="bg-gray-200 text-2xl text-rose-400 p-4">Running...</h1>
      <div className="w-full  p-2 flex flex-col  gap-5">
        <div className="w-96 shadow-2xl bg-gray-200 shadow-gray-300 p-4 border-4 border-rose-600">
          <img
            src={logo}
            alt="collegeimg"
            className="h-[300px] w-full items-center hover:scale-75 delay-75"
          />
          <h3 className="text-lg text-gray-400 font-bold text-center">
            Cimage College Patna
          </h3>
          <h3 className="text-lg text-gray-400 font-bold text-center">
            Degree : B.sc-IT
          </h3>
          <h4 className="text-lg text-gray-400 font-bold text-center">
            cgpa : processing...
          </h4>
        </div>
      </div>

      {/* completed Degree */}

    </>
  );
};

export default Education;
