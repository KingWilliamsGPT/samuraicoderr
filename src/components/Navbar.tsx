import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="z-50 mx-auto flex w-full max-w-screen-lg items-center pt-9 font-mono">
            <Link className="text-lg font-black text-neutral-800 duration-300 motion-reduce:transition-none dark:text-white mr-6" href="/">@samuraicoderr</Link>
            <div className="flex flex-grow justify-start">
                <div className="hidden gap-4 lg:inline-flex items-center">
                    <Link className="relative rounded-md px-2 py-1 transition-all hover:bg-black/10 hover:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-200 sm:px-3 sm:py-2 bg-black/10 dark:bg-white/10 dark:text-neutral-200" href="/">Home</Link>
                    <Link className="relative rounded-md px-2 py-1 transition-all hover:bg-black/10 hover:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-700 dark:text-neutral-400" href="/work">My work</Link>
                    <Link className="relative rounded-md px-2 py-1 transition-all hover:bg-black/10 hover:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-200 sm:px-3 sm:py-2 text-neutral-700 dark:text-neutral-400" href="/blog">Blog</Link>
                    <div className="relative" data-headlessui-state="">
                        <button className="group relative hidden rounded-md p-1 text-neutral-700 transition-all duration-200 hover:bg-black/10 hover:text-neutral-800 ui-open:bg-black/10 ui-open:text-neutral-800 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-200 dark:ui-open:bg-white/10 dark:ui-open:text-neutral-200 sm:px-3 sm:py-2 md:flex md:items-center" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:Rrk6lb:">
                            <span>More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 size-4 text-neutral-700 duration-150 ease-in-out group-hover:rotate-90 group-hover:text-neutral-800 ui-open:rotate-90 ui-open:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-400">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Re6lb:" data-state="closed" className="group flex items-center rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 size-10 justify-center border-0 !bg-transparent !outline-none hover:!bg-neutral-300 dark:hover:!bg-white/15 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-left size-5 shrink-0 text-neutral-900 dark:text-neutral-100">
                        <path d="M15 12H3"></path>
                        <path d="M17 18H3"></path>
                        <path d="M21 6H3"></path>
                    </svg>
                </button>
                <button aria-label="Open settings" className="group rounded-md py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 !bg-transparent hover:!bg-neutral-300 dark:hover:!bg-white/15 group ml-auto flex h-10 w-10 items-center justify-center px-2 !outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings text-neutral-800 dark:text-neutral-200 h-5 w-5 shrink-0 duration-200 group-hover:rotate-90 group-hover:transform motion-reduce:transition-none dark:group-hover:text-white">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
            </div>
        </nav>
    );
}