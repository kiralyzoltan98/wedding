import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="mt-auto bg-red-200 p-2">
      <div className="ml-6 mr-6 pl-6 pr-3 flex flex-col md:flex-row items-center justify-between transparent_glass rounded-t-lg">
        <p>Designed & Developed by{" "}
          <center><a href="https://kiralyzoltan.com" className="cursor-pointer underline">Király Zoltán</a></center>
        </p>
        <p>❤️ All rights reserved ©</p>
        <Button variant='ghost' asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </footer>
  );
}