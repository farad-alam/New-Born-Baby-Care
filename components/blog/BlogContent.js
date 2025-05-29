import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import '@/app/styles/blog.css'

function BlogContent({content}) {
  return (
    <div className="prose prose-lg max-w-none">
      {content ? (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      ) : (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {"<p>এই প্রবন্ধের বিস্তারিত বিষয়বস্তু শীঘ্রই আসছে।</p>"}
        </ReactMarkdown>
      )}
    </div>
  );
}

export default BlogContent;
