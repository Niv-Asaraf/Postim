"use client";
import { SummaryPost } from "@/types/post";
import PostStamp from "../post/PostStamp";
import Button from "./Button";
import { READ_MORE_BUTTON } from "@/data/appTexts";
import { ButtonTypes } from "@/data/appConstants";
import Link from "next/link";
interface PostSummaryProps {
  post: SummaryPost;
}
export default function PostSummary({ post }: PostSummaryProps) {
  return (
    <div className="min-h-100 max-h-120 w-85 rounded-lg bg-white shadow-xl flex flex-col sm:w-130 md:w-90 lg:w-80 xl:w-102 2xl:w-120">
      <div className="min-h-35 max-h-50 p-4">
        <img
          src={post.primaryImageUrl}
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="pl-4 py-4 sm:p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-base text-gray-600 mt-2">{post.description}</p>
        </div>

        <div className="flex flex-col justify-between sm:flex-row md:flex-col gap-3 pt-2 pr-1 mb-2">
          <div className="flex sm:items-center md:items-start xl:items-center">
            <PostStamp
              author={post.author}
              date={post.publishedAt}
              className="text-sm"
            />
          </div>
          <div className="flex justify-center sm:justify-end md:justify-center xl:justify-center">
            <Link href={`/post/${post.id}`}>
              <Button
                type={ButtonTypes.TRANSPARENT}
                className="rounded-sm text-xs py-2 px-3"
                label={READ_MORE_BUTTON}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
