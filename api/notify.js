export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    res.status(500).json({ error: 'Telegram not configured' })
    return
  }

  const label = typeof req.body?.label === 'string' ? req.body.label : 'botón'
  const text = `🔔 Click en CTA: ${label}`

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })
    res.status(200).json({ ok: true })
  } catch {
    res.status(502).json({ error: 'Failed to notify Telegram' })
  }
}
