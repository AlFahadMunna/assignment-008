import Link from "next/link";
import logo from "@/assets/nav-logo.png";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="navbar bg-base-100 container mx-auto shadow-sm h-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-books"}>All Books</Link>
            </li>
            <li>
              <Link href={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="nav-logo" width={160} />{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <ul className="flex gap-3">
            <button className="btn">
              <Link href="/login">Login</Link>
            </button>
            <button className="btn">
              <Link href="/register">Register</Link>
            </button>
          </ul>
        )}
        {user && (
          <div className="flex gap-4 items-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <Image src={user?.image} alt="user" />
              </div>
              <p>{user?.name}</p>
            </div>
            <button className="btn">SignOut</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
