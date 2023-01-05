import Head from "next/head";
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Afraem Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
<nav className="p-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons">developedbyed</h1>
  <ul className="flex items-center">
    <li>
      <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
    </li>
    <li><a className="bg-gradient-to-r from-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
  </ul>
</nav>
<div className="text-center p-10">
  <h2 className="text-5xl py-2 text-teal-600 font-medium">Md.Afraem Ibne Aziz</h2>
  <h3 className="text-2xl py-2">Developer and designer</h3>
  <p className="text-md py-5 leading-8 text-gray-800">Freelancer Providing services for programming and design content
    needs. Join me down below and Let's get cracking</p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
  <AiFillTwitterCircle/>
  <AiFillLinkedin/>
  <AiFillYoutube/>
</div>
<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
<Image src={deved}layout="fill" objectFit="cover" />
</div>
</section>
{/* section two start from here */}
<section>
<div>
  <h3 className="text-3xl py-1">Service I Offer</h3>
  <p className="text-md py-2 leading-8 text-gray-800">
    Since the beginning of my journey as a freelancing Developer
    , I've done remote work for <span className="text-teal-500"> agencies</span>
    consulted for <span className="text-teal-500">startups</span>
    and collaborated with talented people are to create digital products 
    for both business and consumer use.
  </p>
  <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
</div>
<div className="lg:flex gap-10">
  <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
    <Image src={design} width={100} height={100}/>
    <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design"</h3>
    <p> Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className="py-4 text-teal-600"> Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
  </div>
  <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
    <Image src={code} width={100} height={100}/>
    <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design"</h3>
    <p> Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className="py-4 text-teal-600"> Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
  </div>
  <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
    <Image src={consulting} width={100} height={100}/>
    <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design"</h3>
    <p> Creating elegant designs suited for your needs following core
                design theory. </p>
                <h4 className="py-4 text-teal-600"> Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
  </div>

</div>
</section>
<section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section> 
      </main>
    </>
  )
}
