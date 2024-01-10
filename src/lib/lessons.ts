export default async function getLesson(id: number) {
    await new Promise(resolve => setTimeout(resolve, 2000))
        const res = await fetch(`http://localhost:3000/api/lesson/${id}`, {cache: 'no-store'})
    return res.json()
}

export async function postLesson(id:number, code: string) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res = await fetch(`http://localhost:3000/api/submissions/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify({code: code})
    })

    return res.json()
}