import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            {/* Two-Column Feature Section */}
            <section className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 py-16" id="create-release">
            <div className="flex flex-col gap-3 sm:gap-4 sm:w-3/5">
                    <h1 className="mb-0">🔥 Fire your social media manager</h1>
                    <p className="text-lg font-bold">Effortlessly create social media content with the first AI Release Planner! Generate social media content and posting schedules for your upcoming releases. Save time and money and hype up your album release or merch drop from a laptop instead of hiring a marketer.</p>
                    <p className="font-bold text-lg">✏️ Add your release info and <a href="#create-release">generate an AI release plan</a></p>
                    <p className="font-bold text-lg">📅 <a href="#generate-release">Schedule 100% AI posts</a> easily across your socials</p>
                    <p className="font-bold text-lg">📄 AI copy trained by elite record labels & streetwear brands</p>
                    <p className="font-bold text-lg">❤️ Create 100% AI social media for any release you have</p>
                    
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-white lg sm:w-2/5">
                    
                    <p className="text-black text-center text-xl pb-4">Create a complete AI release schedule in seconds.</p>
                    <Link href="https://app.releaseplanai.com/" legacyBehavior>
                        <a className="px-4 py-2 mt-4 text-lg no-underline font-semibold text-white bg-black hover:bg-white hover:text-black border border-white hover:border-black">Create your AI release plan+</a>
                    </Link>
                    <p className="text-black text-xs mt-2">If you already have an account we&apos;ll log you in</p>
                </div>
            </section>
            
            
            {/* Hero Call-Out Section */}
            <section className="flex flex-col items-center justify-center text-center py-16">
                <h2 className="text-4xl font-bold mb-4">Add your release and start creating release plans now</h2>
            </section>
            
            {/* Two-Column Feature Section */}
            <section className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 py-16" id="create-release">
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <h2 className="text-3xl font-bold">The first AI release plan tool for creative teams
                    </h2>
                    <p className="text-lg">
                        Stop messing around with broken distributor promo tools. Generate an entire release plan in seconds. <br></br>Enter your release or drop title, drop date and URL and a 6 week release plan will generate instantly.<br></br> Your first release plan is on us!
                    </p>
                </div>
                <div className="flex justify-center sm:w-1/2">
                    <img src="/images/create-release-plan-ui.png" alt="release plan ai create release plan" className="rounded-sm shadow-lg" />
                </div>
            </section>

            {/* Two-Column Feature Section */}
            <section className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 py-16" id="generate-release">
            <div className="flex justify-center sm:w-1/2">
                    <img src="/images/generated-release-plan-ai.png" alt="release plan ai create release plan" className="rounded-sm shadow-lg" />
                </div>
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <h2 className="text-3xl font-bold">AI release schedule app for building hype</h2>
                    <p className="text-lg">
                        A model that continually improves itself, trained on the posting copy of the largest record labels and streetwear brands. One click copy & scheduling to your social channels makes release planning easier than ever.
                    </p>
                </div>                
            </section>


            {/* Three-Column Section */}
            <section className="flex flex-col sm:flex-row items-center justify-center text-center gap-8 sm:gap-16 py-16">
                <div className="flex flex-col gap-4 sm:w-2/12">
                    
                </div>
                <div className="flex flex-col gap-4 sm:w-8/12">
                    <h3 className="text-2xl font-bold">Single pricing model</h3>
                    <h3 className="text-6xl font-bold">$12<span className="text-sm"> /year</span></h3>
                    <p className="text-lg">
                        First plan is on us. Then just $2 per month (billed $12/year)
                    </p>
                    
                    <Link href="https://app.releaseplanai.com/" legacyBehavior>
                        <a className="px-4 py-2 mt-4 text-lg no-underline font-semibold text-white bg-black hover:bg-white hover:text-black border border-white">Get started</a>
                    </Link>
                </div>
                <div className="flex flex-col gap-4 sm:w-2/12">
                    
                </div>
            </section>

        <section className="py-16">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
                <div className="flex flex-col gap-4">
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Who should use Release Plan AI for?</summary>
                        <p className="mt-2">We originally built this for marketers in music. Creating a release schedule for upcoming projects is time consuming. But we soon found interest and a use case for streetwear drops. The psychology of hype building is similar and as we expanded our model training found a lot of similarities in social copy. Now you get the benefit.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">How much does Release Plan AI cost?</summary>
                        <p className="mt-2">$12 per year. We use Stripe for payments.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Does Release Plan AI train on my data?</summary>
                        <p className="mt-2">Not currently. We&apos;re considering creating GPTs for each account and adding the ability to add brand assets so the GPT is training on our plan model and your own data but it&apos;s nothing we have implemented yet.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Can I upload images?</summary>
                        <p className="mt-2">Not at this time.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Does Release Plan AI genreate AI images for posts?</summary>
                        <p className="mt-2">We don&apos;t support image generation. Generally, image generation is the worst part of AI tools and we wouldn&apos;t want people create more AI image slop.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Can I cancel my subscription at any time?</summary>
                        <p className="mt-2">Yes, you can cancel your subscription at any time. There are no long-term commitments, and you can easily manage your subscription settings in your account.</p>
                    </details>
                    <details className="border border-gray-300 rounded p-4">
                        <summary className="font-semibold cursor-pointer">Who built Release Plan AI?</summary>
                        <p className="mt-2">Release Plan AI was built by <Link href="https://pcdkd.fyi/" className="underline transition decoration-dashed text-white underline-offset-8 hover:opacity-80">Dan</Link>, a founder and product builder working in music and decentralized technologies for 15+ years.</p>
                    </details>
                </div>
            </div>
        </section>
        </main>
    );
}


