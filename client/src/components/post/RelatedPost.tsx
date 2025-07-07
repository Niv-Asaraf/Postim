import { RelatedPostType } from "@/types/post";

interface RelatedPostProps {
  post: RelatedPostType;
  index: number;
}
export default function RelatedPost({ post, index }: RelatedPostProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 h-full w-4/5 sm:w-3/4 md:w-1/2 lg:h-1/4 lg:w-full lg:flex-row 
     ${index > 1 ? "hidden lg:flex" : ""} ${index > 2 ? "lg:hidden" : ""}`}
    >
      <div className="w-full h-3/4 lg:w-1/2 lg:h-26">
        <img
          src={post.primaryImageUrl}
          alt={post.title}
          className="w-full object-cover h-full rounded-lg"
        />
      </div>
      <div className="flex h-1/4 lg:w-1/2 lg:h-full items-center pl-4">
        <h1 className="w-full break-words">{post.title}</h1>
      </div>
    </div>
  );
}
