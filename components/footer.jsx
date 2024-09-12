import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                contact us 
                    hello @ releaseplanai . com
                 | <Link href="/legal" className="underline transition decoration-dashed text-white underline-offset-8 hover:opacity-80">Terms of Use & Privacy</Link> | &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};
