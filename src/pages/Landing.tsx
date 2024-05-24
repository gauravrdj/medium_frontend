import { Link } from "react-router-dom";

export const LandingPage = () => {

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="">
        {/* Medium Logo */}
        <div className="rounded-full h-16 w-16 flex items-center justify-center mb-4 mx-auto">
    <img src="/logo.png" alt="Medium Logo"/>
</div>

        {/* Text and Button */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4">Medium</h1>
          <p className="text-gray-700 mb-6">A place to read and write big ideas and important stories.</p>
          <Link to={"/signup"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg border border-blue-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
