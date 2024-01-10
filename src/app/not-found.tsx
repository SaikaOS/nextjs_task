import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-between h-20'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='bg-zinc-300 rounded-md p-2 text-center'>Return Home</Link>
    </div>
  )
}