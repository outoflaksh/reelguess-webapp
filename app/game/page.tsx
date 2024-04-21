import Image from "next/image"

import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import Link from "next/link"

export default async function GamePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    const movieDetails = {
        moviePosterUrl: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        hints: ["Action", "Cars", "Family"]
    }
    const posterWidth = 250;
    const posterHeight = posterWidth * 1.5;

    return (
        <main className="min-h-screen w-full">
            <div className="flex flex-col items-center mt-12">
                <h1 className="font-bold">Welcome {data.user?.email}!</h1>
                <h3 className="mt-4">Hints:</h3>
                <div className="mt-2">
                    {movieDetails?.hints.map((hint) => {
                        return (
                            <h3 className="text-lg font-medium px-6 py-1 bg-gray-600 rounded-full inline-block mr-2">{hint}</h3>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <div className="overflow-hidden mr-6 rounded-xl">
                    <Image
                        src={movieDetails.moviePosterUrl}
                        alt="Poster hint"
                        width={posterWidth}
                        height={posterHeight}
                        className="blur-md"
                    />
                </div>
                <section className="bg-white dark:bg-gray-900 rounded-xl w-1/3">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md sm:text-center flex flex-col items-center h-full">
                            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Which movie could it be?</h2>
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Player ID: outoflaksh</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        </div>
                                        <input className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your guess" type="text" required />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">Guess it before your friends and win the game! <Link href="/auth/logout" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Logout</Link>.</div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}