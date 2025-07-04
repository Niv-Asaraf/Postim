import PostCategories from "@/components/post/PostCategories";
import PostStamp from "@/components/post/PostStamp";
import RelatedPostsList from "@/components/post/RelatedPostsList";
import { RELEATED_POST_HEADER } from "@/data/appTexts";
import { fullPosts } from "@/data/mockDB";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ postId: number }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  const post = fullPosts.find((p) => p.id === Number(postId));

  if (!post) return notFound();
  return (
    // Div - Container:
    <div className="flex flex-col lg:flex-row bg-gray-50">
      {/* {--------- Div-Left -----------} */}
      <div className="flex flex-col gap-5 p-4 w-full lg:h-full lg:w-3/4 xl:w-4/5 pt-6 pl-8">
        {/* {Div - Top Contentet - Left} */}
        <div className="flex flex-col gap-2 flex-wrap">
          <h1 className="text-2xl md:text-3xl">{post.title}</h1>
          <PostStamp
            author={post.author}
            date={post.publishedAt}
            className="text-base"
          />
        </div>
        {/* {Div - Categories List} */}
        <PostCategories categoriesList={post.categories} />

        {/* Div - Image Container */}
        <div className="h-40 mt-1 sm:h-50 md-h-65 xl:h-70">
          <img
            src={post.primaryImageUrl}
            alt={post.title}
            className="object-cover h-full w-full rounded-md"
          />
        </div>

        {/* Div - Buttom Contentet - Left */}
        <div>
          <p className="text-gray-600 mt-2 sm:text-lg">{post.body}</p>
        </div>
      </div>

      {/* -----------  Div-Right ------------------ */}
      <div className="flex flex-col items-center w-full lg:h-full lg:w-1/4 xl:w-1/5">
        {/* Div - White BG*/}
        <div className="flex flex-col gap-5 bg-white w-5/6 h-80 my-10 shadow-lg py-4 px-3 rounded-md lg:mr-6 lg:h-150">
          <h1 className="text-lg h-1/12">{RELEATED_POST_HEADER}</h1>
          {/* Related Posts List */}
          <RelatedPostsList relatedList={post.relatedPosts} />
        </div>
      </div>
    </div>
  );
}
