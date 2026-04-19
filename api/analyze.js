export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { system, message } = req.body;

  if (!system || !message) {
    return res.status(400).json({ error: 'Missing system or message' });
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 8000,
      system,
      messages: [{ role: 'user', content: message }]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data.error?.message || 'API error' });
  }

  res.status(200).json(data);
}
