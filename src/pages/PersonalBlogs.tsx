import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import  moment  from "moment"
// import { useBlogs } from "../hooks"
import { Skeleton } from "../components/skeleton"
import { useMyBlogs } from "../hooks"
import { useNavigate } from "react-router-dom"
export const MyBlogs=()=>{
    const {blogs, loading}=useMyBlogs();
   const navigate = useNavigate();
    if(loading || !blogs){
        //We can use here skeletons for loading
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                   
                </div>
            </div>
        </div>
    }
  if(blogs.length===0){
    return (
        <div>
          <Appbar />
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md text-center transform transition-transform duration-300 hover:scale-105">
              <svg
                className="w-20 h-20 text-green-500 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m-7-7h8a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4m5 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3h10z"
                ></path>
              </svg>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">No Posts Yet</h1>
              <p className="text-gray-600 mb-6">
                You haven't created any posts yet. Start creating your first post now!
              </p>
              <button onClick={()=>{
                navigate('/publish')
              }} className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg">
                Create a Post
              </button>
            </div>
          </div>
        </div>
      );
  }

    return <div>
        <Appbar/>
        <div className="flex justify-center ">
        <div className="">
        {/* <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard> */}
        {blogs.map(ele=>
            <BlogCard id={ele.id} authorName={ele.author.name || "Anonymus User"} title={ele.title} content={ele.content} publishedDate={moment(ele.date).format('LLLL')} personal="true"></BlogCard>
        )}
    </div>
    </div>
    </div>
}