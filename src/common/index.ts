export type ApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: Record<string, string>
}

export async function apiRequest<T>(url: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body, headers = {} } = options

  try {
    const res = await fetch(`${process.env.BASEURL}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data?.message || 'API request failed')
    }

    return data
  } catch (err: any) {
    console.error('API Error:', err)
    throw err
  }
}
