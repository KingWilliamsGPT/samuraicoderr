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
                        <a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/">Home</a><a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/work">My work</a><a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/blog">Blog</a>
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-400">
                        <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">Social</p>
                        <a target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="https://github.com/Suhaib3100">Github</a><a target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="https://instagram.com/suhaib_s_z">Instagram</a><a target="_blank" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="https://discord.gg/sgt4QEyDxK">Discord</a>
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-400">
                        <p className="mb-2 mt-1 font-bold text-neutral-800 dark:text-white">Other</p>
                        <a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/uses">What i use</a><a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/contact">Contact</a><a target="_self" className="mt-1 block duration-100 hover:text-neutral-700 hover:underline motion-reduce:transition-none dark:hover:text-neutral-300" href="/photography">Photography</a>
                    </div>
                </div>
        </footer>
    );
}