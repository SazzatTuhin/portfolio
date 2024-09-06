import { blogs } from "@/data/blogs";
import Sectiontitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div id="blogs" className="wrapper">
      <Sectiontitle title="Blogs" />
      <div className="gird grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 w-full  shadow-xl">
            <figure className="h-60">
              <Image
                src={blog.cover}
                alt={blog.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <div className="flex justify-between items-center gap-5 font-semibold">
                <p className="badge badge-outline">{blog.author}</p>
                <p className="text-primary">{blog.publishedAt}</p>
              </div>
              <p>{blog.body.substring(0, 200)}...</p>
              <div className="card-actions justify-end">
                <Link
                  target="_blank"
                  href={blog.url}
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="https://github.com/SazzatTuhin"
          target="_blank"
          className="btn btn-outline"
        >
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;