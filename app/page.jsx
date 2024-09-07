import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Welcome to Release Plan AI</h1>
                <p className="text-lg">Your Ultimate Tool for Effortless Promotion</p>
                <p>Are you an artist, manager, or marketer looking to amplify your next big release? Look no further! Release Plan AI is here to revolutionize the way you plan and execute your promotional campaigns.</p>
                <h2>What We Do</h2>
                <p>Release Plan AI is a cutting-edge planner designed to help you effortlessly generate promotional social content for your upcoming releases. Whether you&apos;re an artist, an artist manager, a record label marketer, or a streetwear brand marketer, our AI-powered tool is tailored to meet your needs.</p>
                <h2>How It Works</h2>
                <ol>
                    <li>Add Your Release Details: Simply input your release title, date, and website.</li>
                    <li>AI-Generated Content: Our advanced AI will automatically create a comprehensive plan of social posts to promote your release.</li>
                    <li>Effortless Execution: Follow the plan and watch your promotional campaign come to life with minimal effort.</li>
                </ol>
                <h2>Why Choose Release Plan AI?</h2>
                <ul>
                    <li>Save Time: No more endless brainstorming sessions. Get a full promotional plan in minutes.</li>
                    <li>Boost Engagement: Our AI crafts engaging content that resonates with your audience.</li>
                    <li>Stay Organized: Keep all your promotional activities in one place, ensuring nothing falls through the cracks.</li>
                    <li>Tailored for You: Whether you&apos;re in music, fashion, or any other creative industry, our tool adapts to your unique needs.</li>
                </ul>
                <h2>Join the Revolution</h2>
                <p>Don&apos;t let the stress of planning promotions hold you back. Embrace the future of marketing with Release Plan AI and take your promotional game to the next level.</p>
                <h2>Get Started Today</h2>
                <p>Ready to make your next release a smashing success? Sign up now and let Release Plan AI do the heavy lifting for you. Your audience is waiting!</p>
            </section>
        </main>
    );
}


