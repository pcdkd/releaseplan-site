import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-4 md:pb-24">
            <div className="flex items-center">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center no-underline">
                        <h1 className="text-sm">Release Plan AI</h1>
                    </a>
                </Link>
            </div>
            <div className="ml-auto">
                <Link href="https://app.releaseplanai.com/" legacyBehavior>
                    <a className="text-sm no-underline">Login / Signup</a>
                </Link>
            </div>
        </nav>
    );
}
