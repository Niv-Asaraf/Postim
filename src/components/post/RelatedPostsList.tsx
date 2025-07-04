import { RelatedPostType } from "@/types/post";
import RelatedPost from "./RelatedPost";

interface RelatedPostsListProps {
  relatedList: RelatedPostType[];
}
export default function RelatedPostsList({
  relatedList,
}: RelatedPostsListProps) {
  return (
    <div className="flex flex-row justify-center gap-4 h-10/12 lg:flex-col lg:justify-start">
      {relatedList.map((post, index) => (
        <RelatedPost key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
