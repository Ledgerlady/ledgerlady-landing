import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const Blogs = () => {
  return (
    <section id="blog" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">From the Community</p>
          <h2 className="mt-4 section-title">
            Writing that reflects the depth of the people building here.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            Ledger Lady&apos;s writing reflects the range of the community:
            legal, cryptography, ZK, hardware, and the broader systems shaping
            blockchain.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((blog, index) => (
            <Reveal key={blog.slug} delay={index * 90}>
              <Link
                href={`/blog/${blog.slug}`}
                className="group flex h-full flex-col justify-between"
              >
                <article className="surface-card h-full overflow-hidden p-4">
                  <div className="relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="aspect-[16/10] w-full rounded-[22px] object-cover"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#596780]">
                      <span className="rounded-full bg-[#eef6ff] px-3 py-1.5 text-deepBlue">
                        {blog.category}
                      </span>
                      <span>{blog.publishedAt}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-8 text-black transition group-hover:text-deepBlue">
                      {blog.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#596780]">
                      {blog.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-11 w-11 overflow-hidden rounded-full">
                        <Image
                          src={blog.image}
                          alt={blog.authorName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-black">
                          {blog.authorName}
                        </p>
                        <p className="text-sm text-[#596780]">
                          {blog.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
