import CreatePostButton from "@/components/ui/post/create-post-button";
import PostFeed from "@/components/ui/post/post-feed";

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <CreatePostButton />
      <PostFeed />
    </div>
  );
}
