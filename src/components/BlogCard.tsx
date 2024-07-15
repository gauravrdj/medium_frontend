import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {toast} from 'sonner'
// import { useState } from "react";
interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:string;
    personal:string;

}
export function BlogCard({id,authorName, title, content, publishedDate, personal}:BlogCardProps){
    if(personal==="true"){
      return (
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex justify-between">
          <Link to={`/blog/${id}`} className="flex flex-1">
            <div className="flex">
              <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
              </div>
              <div className="font-extralight flex justify-center flex-col pl-2">{authorName}</div>
              <div className="flex justify-center flex-col text-sm pl-2 text-green-500">
                &#9679;
              </div>
              <div className="flex justify-center flex-col font-thin text-slate-800 ">
                {publishedDate}
              </div>
            </div>
          </Link>
          <div className="flex space-x-2">
            <button
              onClick={(e) => { e.stopPropagation(); /* Add your edit logic here */ }}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={async () => {
                // e.stopPropagation();
                const res = await axios.post(`${BACKEND_URL}/api/v1/blog/delete`, {
                
                    blogId: id,
                },{
                    headers:{
                      Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                
                });
                
                if (res.data.status === 200) {
                  toast.success(`${res.data.msg}`);
                } else {
                  toast.error(`${res.data.msg}`);
                }
                window.location.reload()
              }}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
        <Link to={`/blog/${id}`} className="block">
          <div className="text-xl font-semibold pt-2">
            {title}
          </div>
          <div className="text-md font-thin">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </div>
          <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} min read...`}
          </div>
        </Link>
      </div>
      
      );
      
    }
    return (
        <Link to={`/blog/${id}`}>
          <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex">
              <div className="flex justify-center flex-col">
                <Avatar name={authorName} /> 
              </div>
              <div className="font-extralight flex justify-center flex-col pl-2">{authorName}</div>
              <div className="flex justify-center flex-col text-sm pl-2 text-green-500">
                &#9679;
              </div>
              <div className="flex justify-center flex-col font-thin text-purple-800 ">
                {publishedDate}
              </div>
            </div>
            <div className="text-xl font-semibold pt-2"> 
              {title}
            </div>
            <div className="text-md font-thin">
              {content.length > 100 ? content.slice(0, 100) + "..." : content}
            </div>
            <div className="text-red-700 text-sm font-thin pt-4">
              {`${Math.ceil(content.length / 100)} min read...`}
            </div>
          </div>
        </Link>
      );
      
}

export function Avatar({name}:{name:string}){
    // const nameArr=name.split(' ');
    return <div>
<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}{name[1].toUpperCase()}</span>
</div>
</div>


}