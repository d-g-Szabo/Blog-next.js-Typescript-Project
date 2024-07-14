import dbConnect from "@/utils/dbConnection";
export default async function Post({ paramId }: any) {
  const db = dbConnect();
  const post = (
    await db.query(
      `SELECT posts.title, posts.content, posts.likes, categories.name AS "category", posts.id FROM posts, categories WHERE posts.category_id = categories.id AND posts.id = $1`,
      [paramId]
    )
  ).rows[0];

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.category}</p>
      <p>{post.content}</p>
      <p>{post.likes}</p>
    </div>
  );
}
