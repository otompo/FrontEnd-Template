import Link from "next/link";
import { CreateAccount, LogIn, DonateButton } from "./buttons";

export default function Footer() {
  return (
    <>
      <div className="bg-teal-900 py-10 lg:py-20 relative" id="footer">
        <div className="slant-footer"></div>
        <footer className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-white text-3xl">Invoicer</h2>
          </div>

          <ul className="">
            <li>
              <Link href="/about" className="text-white">
                <a>About Invoicer</a>
              </Link>
            </li>
            <li className="my-3">
              <Link href="/" className="text-white">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/suggestion-box" className="text-white">
                <a>Suggestion Box</a>
              </Link>
            </li>
          </ul>

          <ul className="">
            <li className="">
              <CreateAccount />
            </li>
            <li className="my-5">
              <LogIn />
            </li>
            <li>
              <DonateButton />
            </li>
          </ul>
          <p className="text-slate-200">
            Built by{" "}
            <a
              href="https://tsbsankara.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-slate-50"
            >
              Code Smart Websoft
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
