import Image from "next/image";
import React from "react";

interface img {
  source: string;
}

const BlogImage = (props: img) => {
  return (
    <div className="relative"> 
      <Image
        src={props.source}
        alt= 'Image for blog Card' 
        objectFit="contain"
        width={336}
        height={200}
      />
    </div>
  );
};

export default BlogImage;
