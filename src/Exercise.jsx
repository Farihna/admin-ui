import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
            name="Upin"
            email="upin@gmail.com"
            street="JL. Merdeka"
            city="Semarang"
          />
          <UserCard 
            name="Ipin"
            email="ipin@gmail.com"
            street="JL. Hajar"
            city="Gunungpati"
          />
          <UserCard 
            name="Mail"
            email="mail@gmail.com"
            street="JL. Pahlawan"
            city="Banyumanik"
          />
        </div>
      </div>
    </>
  );
}

export default Exercise;
