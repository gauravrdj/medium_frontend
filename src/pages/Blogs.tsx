import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { Skeleton } from "../components/skeleton"

export const Blogs=()=>{
    const {loading, blogs}=useBlogs();

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
  

    return <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="">
        {/* <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard>
        <BlogCard authorName="Gaurav Sharma" title="Software Developer" content="In computing, plain text is a loose term for data (e.g. file contents) that represent only characters of readable material but not its graphical representation nor other objects (floating-point numbers, images, etc.)." publishedDate="31st March 2024"></BlogCard> */}
        {blogs.map(ele=>
            <BlogCard id={ele.id} authorName={ele.author.name || "Anonymus User"} title={ele.title} content={ele.content} publishedDate="31st March 2024"></BlogCard>
        )}
    </div>
    </div>
    </div>
}