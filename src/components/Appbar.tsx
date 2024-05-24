import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate=useNavigate();
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer rounded-full h-16 w-16">
        <img src="/logo.png" alt="Medium logo" />
      </Link>
      <div className="flex items-center">
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 "
          >
            New
          </button>
        </Link>
        <div className="flex items-center mr-4">
          <Avatar name="Gaurav Sharma" />
        </div>
        
          <button
            type="button"
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          onClick={async ()=>{
               await localStorage.clear();
               navigate('/signin')
          }} >
            Logout
          </button>
        
      </div>
    </div>
  );
};
