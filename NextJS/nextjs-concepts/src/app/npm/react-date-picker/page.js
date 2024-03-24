"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="text-black">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default ReactDatePicker;
