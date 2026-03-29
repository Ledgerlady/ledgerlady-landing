import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/landing/Footer";
import MarketingSection from "@/components/landing/MarketingSection";
import Navbar from "@/components/landing/Navbar";
import { blogPosts, socialLinks } from "@/content/site";

const BlogStructure = ({ params }: { params: { slug: string } }) => {
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="py-16 font-DM sm:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-deepBlue"
            >
              Back to blog
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#596780]">
              <span className="rounded-full bg-[#eef6ff] px-3 py-1.5 text-deepBlue">
                {blog.category}
              </span>
              <span>{blog.publishedAt}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#596780]">
              {blog.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={blog.image}
                  alt={blog.authorName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-black">{blog.authorName}</p>
                <p className="text-sm text-[#596780]">{blog.authorRole}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px]">
            <Image
              src={blog.image}
              alt={blog.title}
              className="h-[260px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[1fr_280px]">
            <article className="surface-card p-8 sm:p-10">
              {blog.sections.map((section) => (
                <div key={section.title} className="mb-10 last:mb-0">
                  <h2 className="text-2xl font-bold text-black">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#596780]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside className="surface-card h-fit p-8">
              <h2 className="text-lg font-semibold text-black">Share & Connect</h2>
              <p className="mt-3 text-sm leading-6 text-[#596780]">
                Follow Ledger Lady for upcoming sessions, workshops, and new writing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#d8e6ff] px-4 py-2 text-sm font-semibold text-black transition hover:border-deepBlue hover:text-deepBlue"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <MarketingSection />
      <Footer />
    </>
  );
};

export default BlogStructure;
