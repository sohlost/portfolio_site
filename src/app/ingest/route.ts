import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const response = await fetch('https://us.i.posthog.com/capture/', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'https://us.i.posthog.com'
    }
  })

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json'
    }
  })
} 