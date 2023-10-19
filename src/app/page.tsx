import Image from 'next/image'
import Subscribe from '@/Components/Subscribe'

const Button = ({
  children,
  arrow,
  type
}: {
  children: React.ReactNode;
  arrow?: boolean,
  type?: "button" | "submit" | "reset"
}) => {
  return <button
    type={type ? type : 'button'}
    className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors 
              hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className={`mb-1 text-2xl font-semibold`}>
      {children}{' '}

      {arrow &&
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      }
    </h2>
  </button>
}

const Content = () => <>
  <main className="flex flex-col min-h-screen bg-gradient-to-b from-black via-blue-900 to-gray-900">

    {/* Hero Section */}
    <section className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-blob"></div>
      <div className="z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-5">Welcome to Bikoret - Your Gateway to Crypto Insights!</h1>
        <p className="text-gray-400 text-lg mb-5 mt-5">Bikoret is your premier destination for diving into the exciting world of cryptocurrency trading. Empowering both beginners and seasoned traders, Bikoret offers unparalleled insights, data analytics, and real-time trends to help you make informed decisions in the fast-paced crypto market.</p>
        <Button><a href="#subscribe">Get Started</a></Button>
      </div>
    </section>

    {/* Features Section */}
    <section className="flex flex-col items-center justify-center py-16 min-h-screen px-[5%] bg-black">
  <div className="container mx-auto flex flex-col items-center ">
    <h2 className="text-3xl font-bold mb-6 text-white">What Sets Bikoret Apart?</h2>
    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature Card 1 */}
      <div className="flex flex-col p-6 rounded-lg shadow-md text-center h-full">
        <span className="text-4xl mb-4">🚀</span>
        <h3><strong>Comprehensive Analytics</strong></h3>
        <p className="text-gray-200 flex-1">Uncover detailed analytics and historical data on a wide range of crypto tokens.</p>
      </div>
      {/* Feature Card 2 */}
      <div className="flex flex-col p-6 rounded-lg shadow-md text-center h-full ">
        <span className="text-4xl mb-4">📊</span>
        <h3><strong>Real-time Monitoring</strong></h3>
        <p className="text-gray-200 flex-1">Stay ahead of the curve with real-time data updates. Track live market changes, price fluctuations, and trading activities across multiple blockchain networks.</p>
      </div>
      {/* Feature Card 3 */}
      <div className="flex flex-col p-6 rounded-lg shadow-md text-center h-full ">
        <span className="text-4xl mb-4">🔍</span>
        <h3><strong>Smart Insights</strong></h3>
        <p className="text-gray-200 flex-1">Gain actionable insights with our intelligent algorithms. Bikoret&apos;s smart suggestions and predictive analysis help you identify potential investment opportunities and optimize your trading strategy.</p>
      </div>
    </div>
  </div>
</section>


    {/* Call to Action Section */}
    <section className=" flex flex-col items-center justify-center text-center  min-h-screen px-[5%]">
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold mb-6">Ready to Dive In?</h2>
        <p className="text-gray-300 text-lg mb-8">Join Bikoret today and embark on a journey where data meets insight, and opportunity meets action. Start exploring the future of crypto trading!</p>
        <Button><a href="#subscribe">Get Started</a></Button>
      </div>
    </section>

  </main>

</>

export default function Home() {
  return <>


<main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-16 max-w-full mx-auto">

  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  </div>

  <div className="relative flex items-center w-full max-w-2xl">
    <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[140%] rounded-full bg-gradient-radial from-gray-800 to-transparent blur-3xl"></div>
    <div className="absolute -z-20 top-[-5%] left-[-2%] w-[110%] h-[110%] bg-gradient-conic from-sky-800 via-blue-900 blur-2xl"></div>
    <div className="dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 absolute -z-10 top-[-15%] left-[-15%] w-[130%] h-[130%]"></div>
    <Image
      className="relative dark:drop-shadow-[0 0 0.3rem #ffffff70] dark:invert"
      src="/bikoret.svg"
      alt="Bikoret Logo"
      width={584}
      height={77}
      priority
    />
  </div>

  <div className="flex place-items-center">
    <a href="#subscribe"><Button arrow={true}>Get Started</Button></a>
  </div>
</main>



    <Content />

    <Subscribe />
    

  </>
}


      {/* 
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
      </div> */}
