export function trackCtaClick(label) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'CTA',
      event_label: label,
    })
  }

  fetch('/api/notify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ label }),
    keepalive: true,
  }).catch(() => {})
}
