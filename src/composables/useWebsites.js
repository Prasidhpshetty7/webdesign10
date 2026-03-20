import { ref } from 'vue'
import websitesData from '@content/websites/websites.json'

export function useWebsites() {
  const websites = ref(
    Object.entries(websitesData)
      .map(([id, website]) => ({
        id,
        ...website,
      }))
      .sort((a, b) => a.order - b.order)
  )

  return websites
}

export function getFeaturedWebsites(limit = 4) {
  const websites = useWebsites()
  return websites.value.filter(site => site.featured).slice(0, limit)
}
