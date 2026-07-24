export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    res.status(500).json({ error: 'YouTube not configured' })
    return
  }

  // The "uploads" playlist of a channel is always its channel ID with the
  // "UC" prefix swapped for "UU" — avoids a second API call to look it up.
  const uploadsPlaylistId = channelId.replace(/^UC/, 'UU')

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`
    const ytRes = await fetch(url)

    if (!ytRes.ok) {
      res.status(502).json({ error: 'YouTube API error' })
      return
    }

    const data = await ytRes.json()

    const videos = (data.items ?? []).map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails?.medium?.url ??
        item.snippet.thumbnails?.default?.url,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }))

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json({ videos })
  } catch {
    res.status(502).json({ error: 'Failed to fetch YouTube videos' })
  }
}
