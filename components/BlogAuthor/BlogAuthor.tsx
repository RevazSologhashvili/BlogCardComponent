import Image from 'next/image'
import React from 'react'

interface blogAuthor {
    author: string;
    imageSource: string;
}

const BlogAuthor = (props: blogAuthor) => {
  return (
    <div className='flex gap-3 items-center'>
        <div>
            <Image src={props.imageSource} alt='Blog Author' width={32} height={32} className='rounded-full'/>
        </div>
        <span className='text-[#111111] font-[800] text-[14px]'>{props.author}</span>
    </div>
  )
}

export default BlogAuthor