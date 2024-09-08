import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16">
                <div className="flex flex-col gap-3 sm:gap-4 sm:w-3/5">
                    <h1 className="mb-0">Fire your social media manager</h1>
                    <p className="text-lg">Effortlessly create social media content with the first AI Release Planner! Generate social media content and posting schedules for your upcoming releases. Save time and money and hype up your album release or merch drop from a laptop instead of hiring a marketer.</p>
                    <p>Add your release info and generate an AI release plan</p>
                    <p>Schedule 100% AI posts easily across your socials</p>
                    <p>Social content trained by elite record labels & streetwear brands</p>
                    <p>Create 100% AI social media for any release you have</p>
                    
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-blue-800 rounded-lg sm:w-2/5">
                    <h2 className="text-2xl font-bold text-white"></h2>
                    <p className="text-white">Get a complete release schedule in minutes.</p>
                    <Link href="https://app.releaseplanai.com/" legacyBehavior>
                        <a className="px-4 py-2 mt-4 text-lg no-underline font-semibold text-blue-800 bg-white rounded hover:bg-gray-200">Create your AI Release Plan +</a>
                    </Link>
                </div>
            </section>
        </main>
    );
}


