import Image from "next/image"

export default function Home () {
  return (
       <main className="min-h-screen">
        <h1>Welcome Here</h1>
        <p>Welcome to QWIIKORDER</p>
        <Image 
        src="/mypic.jpg"
        alt="my-image"
        width={500}
        height={500}
        className="w-[500px] h-[500px] rounded-full"/>

       </main>   
  )
}