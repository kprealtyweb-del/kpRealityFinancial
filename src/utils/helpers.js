export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function formatPhoneHref(phone) {
  return `tel:${phone.replace(/\s/g, '')}`
}
