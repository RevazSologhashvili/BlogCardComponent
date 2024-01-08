import React, { useState } from "react";

interface blogDescription {
    blogCategory: string;
    publishedDate: string;
    blogHeading: string;
    blogDesc: string;
    gotHoverd: ()=> void;
    gotReleased: ()=> void;
}

const BlogDesc = (props: blogDescription) => {


  return (
    <div className="flex flex-col gap-3">
      <div className="bg-[#F4D04E] w-fit px-3 py-1 rounded font-[800] text-[#111111]">
        {props.blogCategory}
      </div>
      <span className="text-[#111111] text-sm font-[500] ">
      {props.publishedDate}
      </span>
      <h2 className="sm:text-[24px] text-[20px] font-[800] w-fit hover:text-[#F4D04E] hover:cursor-pointer" onMouseLeave={()=> props.gotReleased()} onMouseOver={()=> props.gotHoverd()}>{props.blogHeading}</h2>
      <p className="sm:text-[16px] text-[12px] font-[500] text-[#7F7F7F] leading-[150%]">
      {props.blogDesc}
      </p>
    </div>
  );
};

export default BlogDesc;
