import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex  justify-center h-screen items-center  flex-col gap-2 ">
      <p className="text-3xl">Not found</p>
      <Link
        href="/"
        className="bg-primary px-5 py-2.5 text-white font-medium rounded-lg"
      >
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
