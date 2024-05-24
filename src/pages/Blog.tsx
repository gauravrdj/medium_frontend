import { useParams } from "react-router-dom";
// import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/fullBlog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";


export function Blog(){
    const {id}=useParams();
    const {loading,blog}=useBlog({id:id || ""})
    if(loading || !blog){
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    console.log(blog);
    return (
          
         
          <FullBlog blog={blog}/>
          
    );
}