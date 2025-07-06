import PostSummary from "./PostSummary";
import { SummaryPost } from "@/types/post";

interface PostsListProps {
  postsList: SummaryPost[];
}
export default function PostsList({ postsList }: PostsListProps) {
  const filterdList = postsList.slice(0, 6);
  return (
    <div className="grid grid-cols-1 justify-items-center mt-5 mb-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {filterdList.map((post) => (
        <PostSummary key={post.id} post={post} />
      ))}
    </div>
  );
}
