export function trackCtaClick(label) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'cta_click',
    event_category: 'CTA',
    event_label: label,
  })

  fetch('/api/notify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ label }),
    keepalive: true,
  }).catch(() => {})
}
