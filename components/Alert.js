import React, { useContext, useState } from "react";

function Alert({ message }) {
  const [time, setTime] = useState(4);
  if (time > 0) {
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center text-center dark:bg-white bg-Haiti lg:p-12 min-w-[300px] py-6  left-[50vw] top-[50vh] rounded-lg absolute translate-x-[-50%] translate-y-[-50%]">
      <p className="lg:text-6xl text-4xl text-White dark:text-Casal">
        {message} <br />
        Restarting on {time}
      </p>
    </div>
  );
}

export default Alert;
