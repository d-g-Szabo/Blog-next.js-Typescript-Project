import dbConnect from "@/utils/dbConnection";

export default async function CommentsSection({ params }: any) {
  const db = dbConnect();
  const comments = (
    await db.query(
      `SELECT comments.user_id, comments.comment, comments.post_id FROM comments WHERE comments.post_id = $1`,
      [params]
    )
  ).rows;
  return (
    <div>
      <h1>Comments Section</h1>
      {comments.map((comment, index) => (
        <div key={index}>
          <h2>{comment.user_id}</h2>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
