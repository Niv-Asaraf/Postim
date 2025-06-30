interface PostPageProps {
  params: Promise<{ postId: number }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  return (
    <div>
      <h3>Post number {postId}</h3>
    </div>
  );
}
