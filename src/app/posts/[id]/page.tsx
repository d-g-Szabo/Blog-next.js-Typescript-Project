// we need some navigation here
// we need to use params to render data dynamically
import Link from "next/link";
import dbConnect from "@/utils/dbConnection";
import Post from "@/components/Post";
import CommentsSection from "@/components/CommentsSection";
import { revalidatePath } from "next/cache";

export default function PostPage({ params }: any) {
  // here i need to get the post from the database filtering by id

  // here i need to handle the submit for the comments form
  async function handleSubmit(formData: any) {
    // Tell the component to use the server
    "use server";
    const db = dbConnect();
    // get the data from the form
    const user_id = formData.get("user_id");
    const comment = formData.get("comment");

    // add the data to the database
    await db.query(
      `INSERT INTO comments (user_id, comment, post_id) VALUES ($1, $2, $3)`,
      [user_id, comment, params.id]
    );
    revalidatePath(`/posts/${params.id}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Post Page</h1>
      {/* here I need to display the data about individual post */}
      {/* Post is a prompt I am sending down to the Post component */}
      <Post paramId={params.id} />
      {/* here I need to display the form for comments */}
      {/* here I need to display the form with inputs that are connected to the databasse columns by name */}
      <form action={handleSubmit}>
        <label htmlFor="user_id">User name</label>
        <input type="text" id="user_id" name="user_id" required />
        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" name="comment" required />
        <button type="submit">Submit</button>
      </form>
      {/* here I need to display the comments */}
      <CommentsSection params={params.id} />
    </main>
  );
}
