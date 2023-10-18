"use client"

import { useState } from "react"

export default async () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({email})
        });
        console.log(res);
    }

    return <>
        <section id="subscribe" className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="subscriptionFormDiv" className="max-w-2xl w-full bg-dark rounded-lg p-8 shadow-lg" >
                <h1 className="text-3xl font-bold mb-6">Subscribe to Bikoret</h1>
                <p className="text-gray-400 mb-6">Stay informed with the latest crypto insights. Subscribe now to get updates delivered to your inbox.</p>

                <form id="subscriptionForm">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />

                    <button onClick={handleFormSubmit} value={email} onChange={(e: any) => setEmail(e.target.value)} type="submit" hx-boost="true" className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        Subscribe
                    </button>
                </form>
                {loading && <div id="loadingIndicator" className="hidden">Loading...</div>}
                {failed && <span id="errorSpan" className="text-red-500 mt-2">{errorMessage}</span>}
                {success && <>
                    <div id="successMessage" className="hidden">
                        Thank you for subscribing!
                    </div>
                </>}
            </div>
        </section>
    </>

}