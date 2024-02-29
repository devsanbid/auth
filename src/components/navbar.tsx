import { logoutAction } from "@/actions";
import { getSession } from "@/utils";
import Link from "next/link";
export default async function Navbar() {
  const session = await getSession();
  console.log(session.isLoggin)
  return (
    <nav className="p-4 navbar prose prose-a:text-xl prose-a:btn prose-a:btn-ghost">
      <div className="flex gap-x-5 navbar-start">
        <Link href="profile">Profile</Link>
        <Link href="course">course</Link>
        <Link href="admin">Admin</Link>
      </div>

      <div className="space-x-3 navbar-end not-prose">
        {!session.isLoggin ? (
          <Link href="login" className="btn btn-outline btn-primary">
            Login
          </Link>
        ) : (
          <form action={logoutAction}>
            <button type="submit" className="btn btn-outline btn-error">
              Logout
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}
