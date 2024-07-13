import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>My Blog</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/newPost">New Post</Link>
      </nav>
    </header>
  );
}
