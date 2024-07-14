// we need some navigation here
// we need some query strings to sort the data asc and desc
import Link from "next/link";
import dbConnect from "@/utils/dbConnection";
export default async function PostsPage({ searchParams }: any) {
  //here i need to get the posts from the database
  // Create a connection to the database
  const db = dbConnect();
  // Get the posts from the database
  const posts = (
    await db.query(
      `SELECT posts.title, categories.name AS "category", posts.id FROM posts, categories WHERE posts.category_id = categories.id ORDER BY posts.id`
    )
  ).rows;

  // Sort descending if the query string is set to "desc"
  if (searchParams.sort === "desc") {
    // Reverse the posts array
    posts.reverse();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts Page</h1>
      <Link href="/posts?sort=asc">Sort ascending</Link> -{" "}
      <Link href="/posts?sort=desc">Sort descending</Link>
      {/* here I need to map through the list of posts */}
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
