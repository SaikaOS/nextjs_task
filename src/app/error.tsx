'use client' 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {

  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-between h-20'>
      <h2>Something went wrong!</h2>
      <Link href='/' className='bg-zinc-300 p-2 rounded-md text-center'>
      Go back home
      </Link>
    </div>
  )
}