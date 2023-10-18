'use client'


import Image from 'next/image'
import { MouseEvent, MouseEventHandler, useState } from 'react'

const Button = ({
  onClick,
  text
}: {
  onClick: MouseEventHandler<HTMLDivElement>,
  text: string
}) => {
  return <div
    onClick={onClick}
    className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors 
              hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className={`mb-1 text-2xl font-semibold`}>
      {text}{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
  </div>
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="relative flex place-items-center 
        before:absolute before:h-[200px] before:w-[480px] before:-translate-x-[-50px] before:rounded-full before:bg-gradient-radial 
        before:from-white before:to-transparent before:blur-3xl before:content-['']
        after:absolute after:-z-20 after:h-[120px] after:w-[600px] after:translate-x-[-8px]
        after:bg-gradient-conic after:from-sky-100 after:via-blue-200 after:blur-2xl after:content-['']
        before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
        after:dark:from-sky-900 after:dark:via-[#01f1ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]
      ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/bikoret.svg"
          alt="Bikoret Logo"
          width={584}
          height={77}
          priority
        />
      </div>

      <div className="flex place-items-center">
        <a href="#subscribe"><Button onClick={() => { }} text="Get Starterd" /></a>
      </div>

    </main>
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items center mt-5">

        <div className="max-w-3xl mx-auto bg-dark rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Welcome to Bikoret - Your Gateway to Crypto Insights!</h1>
          <p className="text-gray-400 mb-6">Bikoret is your premier destination for diving into the exciting world of cryptocurrency trading. Empowering both beginners and seasoned traders, Bikoret offers unparalleled insights, data analytics, and real-time trends to help you make informed decisions in the fast-paced crypto market.</p>

          <h2 className="text-xl font-bold mb-2">What Sets Bikoret Apart?</h2>
          <ul className="list-disc ml-6 text-gray-400 mb-6">
            <li className="mb-2">🚀 <strong>Comprehensive Analytics:</strong> Uncover detailed analytics and historical data on a wide range of crypto tokens.</li>
            <li className="mb-2">📊 <strong>Real-time Monitoring:</strong> Stay ahead of the curve with real-time data updates. Track live market changes, price fluctuations, and trading activities across multiple blockchain networks.</li>
            <li className="mb-2">🔍 <strong>Smart Insights:</strong> Gain actionable insights with our intelligent algorithms. Bikoret{'`'}s smart suggestions and predictive analysis help you identify potential investment opportunities and optimize your trading strategy.</li>
            <li className="mb-2">🌐 <strong>Multi-Blockchain Support:</strong> Explore an extensive selection of over 18 blockchains, including Ethereum, BSC, Solana, and more.</li>
            <li className="mb-2">📈 <strong>User-Friendly Interface:</strong> Experience our intuitive and user-friendly interface. Easily navigate through interactive charts, graphs, and tables, making complex data digestible for traders of all levels.</li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Why Choose Bikoret?</h2>
          <p className="text-gray-400 mb-6">Bikoret is not just a platform; it{'`'}s your strategic partner in the crypto market. Whether you{'`'}re a day trader, investor, or enthusiast, our platform equips you with the tools and knowledge needed to make confident decisions.</p>

          <p className="text-gray-400 mb-6">Join Bikoret today and embark on a journey where data meets insight, and opportunity meets action. Start exploring the future of crypto trading!</p>


          <p className="text-gray-700 mt-4">Stay informed. Stay ahead. Choose Bikoret.</p>
        </div>

      </div>
    </div>
    <section id="subscribe" className="flex min-h-screen flex-col items-center justify-between p-24" >

      <div className="max-w-2xl w-full bg-dark rounded-lg p-8 shadow-lg">

        {submitted
          ?
          <div className="group rounded-lg px-5 py-4">
            <h2 className={`mb-1 text-2xl font-semibold text-center text-green`}>
              Thank you for your subscription
            </h2>
          </div>
          : <>
            <h1 className="text-3xl font-bold mb-6">Subscribe to Bikoret</h1>
            <p className="text-gray-400 mb-6">Stay informed with the latest crypto insights. Subscribe now to get updates delivered to your inbox.</p>

            <form className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={email} onChange={e => { setEmail(e.target.value) }} required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />

              <Button
                onClick={(e: MouseEvent) => {
                  e.preventDefault();


                  fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email }),
                  })
                    .then(response => {
                      if (response.ok) {
                        return response.json();
                      }
                      throw new Error('Network response was not ok.');
                    })
                    .then(data => {
                      setSubmitted(true);
                    })
                    .catch(error => {
                      alert('Unable to subscribe. Thank you though!')
                    });
                }}
                text="Subscribe"
              />
            </form>
          </>
        }
      </div>
    </section>

  </>
}
