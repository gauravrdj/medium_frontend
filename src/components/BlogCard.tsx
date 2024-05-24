import { Link } from "react-router-dom";
// import { useState } from "react";
interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:string;
}
export function BlogCard({id,authorName, title, content, publishedDate}:BlogCardProps){
    
   return <Link to={`/blog/${id}`}>
   
       <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
       <div className="flex">
        <div className="flex justify-center flex-col">
       <Avatar name={authorName}/> 
       </div>
       <div className="font-extralight flex justify-center flex-col pl-2">{authorName}</div>
       <div className="flex justify-center flex-col text-sm pl-2 text-green-500">
        &#9679;
       </div>
       <div className="flex justify-center flex-col font-thin text-slate-500 ">
        {publishedDate}
       </div>
       </div>
       <div className="text-xl font-semibold pt-2"> 
        {title}
       </div>
       <div className="text-md font-thin">
        {content.length>100?content.slice(0,100) + "..." : content}
       </div>
       <div className="text-slate-400 text-sm font-thin pt-4">
        {`${Math.ceil(content.length/100)} min read...`}
       </div>
       
    </div>
    </Link>
}

export function Avatar({name}:{name:string}){
    // const nameArr=name.split(' ');
    return <div>
<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}{name[1].toUpperCase()}</span>
</div>
</div>


}