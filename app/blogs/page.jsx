"use client";
import { useState } from "react";
import Blog1 from "./blogData/blog1";
import Blog2 from "./blogData/blog2";
import Blog3 from "./blogData/blog3";

const blogs = [
  {
    id: 1,
    title: "Understanding variant label in CMIP5 and CMIP6",
    component: Blog1,
    link: "https://www.jiveshdixit.in/blogs/understanding-variant-label-in-cmip5-and-cmip6"
  },
  {
    id: 2,
    title: "xIndices: A xarray based Python package for climate variability modes",
    component: Blog2,
    link: "https://www.jiveshdixit.in/blogs/xindices-a-xarray-based-python-package-for-climate-variability-modes"
  },
  {
    id: 3,
    title: "Simple catastrophe model: Risk assessment from a cyclone case",
    component: Blog3,
    link: "https://www.jiveshdixit.in/blogs/simple-catastrophe-model-risk-assessment-from-a-from-cyclone-case"
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Blog List Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-800/90 backdrop-blur-sm p-6 shadow-xl border-r border-gray-700/50 transition-all duration-300">
        <h2 className="text-3xl font-bold text-green-400 mb-6 tracking-tight">
          Recent Blogs
        </h2>
        <ul className="space-y-3">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] ${
                selectedBlog.id === blog.id
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-700/50 text-gray-200 hover:bg-gray-700 hover:text-green-300"
              }`}
              onClick={() => setSelectedBlog(blog)}
            >
              <span className="font-medium">{blog.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog Content Main Area */}
      <main className="w-full md:w-3/4 flex flex-col">
        <div className="bg-gray-900/95 rounded-xl shadow-2xl border border-gray-700/30 flex-1 flex flex-col transition-all duration-300">
          <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed flex-1 overflow-y-auto">
            {selectedBlog && (() => {
              const BlogComponent = selectedBlog.component;
              return <BlogComponent link={selectedBlog.link} />;
            })()}
          </article>
        </div>
      </main>
    </div>
  );
};

export default Blog;
