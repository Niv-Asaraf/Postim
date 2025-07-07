import { PostCategory } from "@/types/post";
import Category from "./Category";

interface PostCategoriesProps {
  categoriesList: PostCategory[];
}
export default function PostCategories({
  categoriesList,
}: PostCategoriesProps) {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {categoriesList.map((cat) => (
        <Category key={cat.id} name={cat.name} />
      ))}
    </div>
  );
}
