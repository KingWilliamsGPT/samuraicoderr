import Link from "next/link"
import Email from "./Email";
import Me from "@/lib/me";

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-screen-md pb-12">
            <hr className="mx-auto mb-5 w-full border border-neutral-200 dark:border-neutral-800" />
            <p className="mb-4 text-sm text-neutral-700 opacity-50 dark:text-neutral-300">
                Copyright &copy; 2021 - {/* */}2025{/* */} Williams Samuel
            </p>
            <div className="flex justify-between gap-4">
                <div className="text-neutral-700 dark:text-neutral-400">
                    <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">Important Links</p>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/">Home</Link>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/work">My work</Link>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/blog">Blog</Link>
                </div>
                <div className="text-neutral-700 dark:text-neutral-400">
                    <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">Social</p>
                    <Link target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300"
                        href={ Me.linkedin }>
                        Linkedin
                    </Link>
                    <Link target="_blank" className="mt-1 flex duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300"
                        href={ Me.twitter }>
                        X
                    </Link>
                    <Link target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300"
                        href={ Me.github }>
                        Github
                    </Link>
                    <Link target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300"
                        href={ Me.instagram }>
                        Instagram
                    </Link>
                    <Email target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300">
                        Email
                    </Email>
                </div>
                <div className="text-neutral-700 dark:text-neutral-400">
                    <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">Other</p>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/uses">What i use</Link>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/contact">Contact</Link>
                    <Link target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/photography">Photography</Link>
                </div>
            </div>
        </footer>
    );
}