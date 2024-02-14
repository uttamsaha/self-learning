"use client";
import { useState } from "react";

const Page = () => {
  const [values, setValues] = useState([
    {
      name: "Uttam",
      age: 30,
    },
    {
      name: "Rakib",
      age: 36,
    },
  ]);

  const handleInputChange = (index, field, event) => {
    const newValues = [...values];
    console.log(newValues);
    newValues[index][field] = event.target.value;
    setValues(newValues);
  };

  return (
    <>
      <div className="text-black">
        {values.map((value, index) => (
          <div key={index}>
            <input
              type="text"
              value={value.name}
              onChange={(event) => handleInputChange(index, "name", event)}
            />
            <br />
            <input
              type="text"
              value={value.age}
              onChange={(event) => handleInputChange(index, "age", event)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
