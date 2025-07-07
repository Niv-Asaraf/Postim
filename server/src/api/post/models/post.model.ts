import { Document, model, Schema, Types } from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  primaryImageUrl: string;
  body: string;
  publishedAt?: Date;
  author: Types.ObjectId;
  categories: { name: string }[];
  relatedPosts?: Types.ObjectId[];
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  primaryImageUrl: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categories: {
    type: [{ name: String }],
    required: true,
  },
  relatedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Post = model<IPost>("Post", postSchema);
export default Post;
