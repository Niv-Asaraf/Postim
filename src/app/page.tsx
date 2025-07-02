import PostsList from "@/components/homePage/PostsList";
import Search from "@/components/homePage/Search";
import { NEWEST_POSTS_HEADER } from "@/data/appTexts";
import { summaryPosts } from "@/data/mockDB";

export default function Home() {
  return (
    <>
      <div>
        <Search />
        <h1 className="mt-12 ml-5 text-lg sm:text-xl lg:text-2xl ">
          {NEWEST_POSTS_HEADER}
        </h1>
        <PostsList postsList={summaryPosts} />
      </div>
    </>
  );
}
