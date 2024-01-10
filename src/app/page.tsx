import { data } from "@/lessons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-1/4 items-center 
    md:flex-row justify-between md:w-1/2 md:h-screen">
      {
        data.map(({id}) => (
          <Link href={`/lesson/${id+1}`}>
          <button key={id} className="bg-zinc-400 text-white py-1 px-6 rounded-md">
            Task {id+1}
          </button>
          </Link>
        ))
      }
    </main>
  )
}