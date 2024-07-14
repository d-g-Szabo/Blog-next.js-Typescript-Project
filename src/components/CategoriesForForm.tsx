import dbConnect from "@/utils/dbConnection";
export default async function CategoriesForForm() {
  // we need to get the categories from the database
  // Create a connection to the database
  const db = dbConnect();
  // Get the categories from the database
  const categories = (await db.query(`SELECT * FROM categories`)).rows;
  return (
    <select id="category_id" name="category_id" required>
      {categories.map((category, id) => (
        <option value={category.id} key={id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
