'use client'

import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
    const params = useSearchParams();
    const errorMsg = params.get("msg")
    return <p>Sorry, something went wrong {errorMsg}</p>
}