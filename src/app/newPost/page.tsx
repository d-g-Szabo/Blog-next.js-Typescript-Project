// need some navigation here
//! remenber the metadata!
import dbConnect from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { use, useEffect } from "react";
import CategoriesForForm from "@/components/CategoriesForForm";

export const metadata = {
  title: "New Post - The best blog ever",
  description:
    "Create a new post on the best blog ever made in human history with Next.js",
};

export default function NewPostPage() {
  // have a function to handle the submit
  async function handleSubmit(formData: any) {
    // formData is the data from, in TypeScript I need to declare the type of the data that I'm going to receive, I used any here because I don't know the type of the data

    // Tell the component to use the server
    "use server";
    // get the data from the form
    const title = formData.get("title");
    const content = formData.get("content");
    const category_id = formData.get("category_id");

    const db = dbConnect();
    // add the data to the database
    await db.query(
      `INSERT INTO posts (title, content, likes, category_id) VALUES ($1, $2, 0, $3)`,
      [title, content, category_id]
    );
    // redirect to the posts page
    revalidatePath("/posts");
    redirect("/posts");
  }
  // add the data from the inputs to the database
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>New Post</h1>
      {/* add a form to collect user input */}
      <form action={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required />
        <label htmlFor="category_id">Category</label>
        <CategoriesForForm />
        {/* <Link to="/form/new-category" onClick={handleLinkClick}>
        New Category
      </Link> */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
