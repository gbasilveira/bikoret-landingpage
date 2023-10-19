"use client"

import { useState } from "react"

export default () => {
    const [email, setEmail] = useState("");
    const [gdpr, setGDPR] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        setFailed(false);
        setSuccess(false);
        setErrorMessage("");
        setLoading(false);


        if (!email) {
            setFailed(true);
            setErrorMessage("Please provide us with your email address")
            return;            
        }


        if (!gdpr) {
            setFailed(true);
            setErrorMessage("You must accept our Privacy Policy")
            return;
        }

        setLoading(true);
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email, gdpr, marketing:true })
        });
        if (res.status == 200) {
            setSuccess(true);
            setEmail("");
        } else {
            setFailed(true);
        }

        setLoading(false);
    }

    return <>
        <section id="subscribe" className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="subscriptionFormDiv" className="max-w-2xl w-full bg-dark rounded-lg p-8 shadow-lg" >
                <h1 className="text-3xl font-bold mb-6">Subscribe to Bikoret</h1>
                {success
                    ? <div id="successMessage">Thank you for subscribing!</div>
                    : <>
                        <p className="text-gray-400 mb-6">Stay informed with the latest crypto insights. Subscribe now to get updates delivered to your inbox.</p>
                        {failed && <span className="text-red-500 mt-2">{errorMessage}</span>}
                        {loading
                            ? <span>Loading...</span>
                            :
                            <form id="subscriptionForm" className="flex flex-col">
                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" required
                                        value={email} onChange={e => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-800" />
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="gdpr" name="gdpr" checked={gdpr} onChange={e => setGDPR(e.target.checked)}
                                        className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-200 dark:bg-gray-800" />
                                    <label htmlFor="gdpr" className="block text-sm font-medium text-gray-400">I agree with the <a href="/privacy-policy">Privacy Policy</a></label>
                                </div>
                                <button
                                    onClick={handleFormSubmit}
                                    className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                                    Subscribe
                                </button>
                            </form>
                        }
                    </>
                }
            </div>
        </section>
    </>

}