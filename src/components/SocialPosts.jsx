import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const instagramPosts = [
  { platform: 'Instagram', url: '#', imagen: '/images/post-1.jpg' },
  { platform: 'Instagram', url: '#', imagen: '/images/post-2.jpg' },
  { platform: 'Instagram', url: '#', imagen: '/images/post-4.jpg' },
]

function SocialPosts() {
  const [youtubeVideos, setYoutubeVideos] = useState([])

  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => (res.ok ? res.json() : { videos: [] }))
      .then((data) => setYoutubeVideos(data.videos ?? []))
      .catch(() => setYoutubeVideos([]))
  }, [])

  const posts = [
    ...instagramPosts,
    ...youtubeVideos.map((video) => ({
      platform: 'YouTube',
      url: video.url,
      imagen: video.thumbnail,
      alt: video.title,
    })),
  ]

  return (
    <section className="section-light bg-bg-light px-6 py-32 md:py-44">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-5xl md:text-6xl tracking-wide">
          Contenido en redes
        </h2>
        <p className="mt-4 text-ink-muted">Instagram &amp; YouTube</p>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-20 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
        {posts.map((post, i) => (
          <Reveal
            key={post.url + i}
            delay={(i % 3) * 0.05}
            className="w-40 shrink-0 snap-start sm:w-48 md:w-auto md:shrink"
          >
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group block aspect-square overflow-hidden rounded-2xl bg-bg-soft"
            >
              <img
                src={post.imagen}
                alt={post.alt ?? `Publicación de ${post.platform}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SocialPosts
