"use client";

import React, { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("india");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `http://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      ).then((res) => res.json().then((data) => data.country));
      if (response) return;
      console.log(response);
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div className="text-gray-400 text-sm">{country}</div>;
}

export default CountryLookup;
