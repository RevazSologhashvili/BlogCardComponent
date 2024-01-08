'use client'
import React, { useState } from "react";
import BlogImage from "../BlogImage/BlogImage";
import BlogDesc from "../BlogDesc/BlogDesc";
import BlogAuthor from "../BlogAuthor/BlogAuthor";

const BlogCard = () => {
    const [shadowSize, setShadowSize] = useState('shadow-[8px_8px_0_0_rgb(0,0,0)]');

    const handleHover = ()=> {
        setShadowSize('shadow-[16px_16px_0_0_rgb(0,0,0)]');
    }
    
    const handleRelease = ()=> {
        setShadowSize('shadow-[8px_8px_0_0_rgb(0,0,0)]');
    }


  return (
    <div className={"flex flex-col p-6 gap-6 sm:max-w-[384px] max-w-[327px] sm:mx-0 mx-6 bg-white rounded-[20px] border-2 border-black " + shadowSize}>
      <BlogImage source="/blogimage.svg" />
      <BlogDesc
        blogCategory="Learning"
        publishedDate="Published 21 Dec 2023"
        blogHeading="HTML & CSS foundations"
        blogDesc="These languages are the backbone of every website, defining structure, content, and presentation."
        gotHoverd = {handleHover}
        gotReleased = {handleRelease}
      />
      <BlogAuthor imageSource="/userpic.png" author="Greg Hooper" />
    </div>
  );
};

export default BlogCard;
