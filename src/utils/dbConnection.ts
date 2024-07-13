// add your connection string here
// this way you can import in the relevant pages when you get or add data to the database
// set up for the database in here
import pg from "pg";
export function dbConnect() {
  const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
  const db = new pg.Pool({
    connectionString: connectionString,
  });
  // Return the db so it is available outside of this function
  return db;
}
