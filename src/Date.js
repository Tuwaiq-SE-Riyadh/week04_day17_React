import React from "react";

function DateFun() {
  const date = new Date();
  const day = date.getDate()
  const month = date.getMonth()
  const year  = date.getFullYear()
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  console.log(date);
  return (
    <div>
      <h1>Date of today {day}:{month}:{year}</h1>
      <h1>The time is {hour}:{min}:{sec}</h1>
    </div>
  );
}
export default DateFun;
