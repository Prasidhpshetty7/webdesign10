<template>
  <div class="container">
    <ParticlesBackground :quantity="100" :staticity="10" :ease="100" :vx="0" :vy="0" />
    <main id="main-content">
      <div class="websites-page">
        <h1 class="websites-page__headline">My Websites</h1>
        <p class="websites-page__description">
          A collection of web design projects showcasing different styles, technologies, and creative approaches. 
          From interactive 3D experiences to clean portfolio designs, each project represents a unique exploration 
          in web development and design.
        </p>
        
        <div class="websites-grid">
          <WebsitePreview 
            v-for="website in websites" 
            :key="website.id" 
            :title="website.title"
            :url="website.url" 
            :website-id="website.id"
            :description="website.description"
            :tags="website.tags"
            :featured="website.featured"
            size="long"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useWebsites } from '@/composables/useWebsites'
import WebsitePreview from '@/components/websites/WebsitePreview.vue'
import config from '@/config/siteconfig.json'

const websites = useWebsites()

const title = 'Websites • Prasidh P Shetty'
const description = 'Explore my collection of web design projects, from interactive 3D experiences to modern portfolio designs'
const route = useRoute()

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${config.siteUrl}${route.path}` },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
  ],
})
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style lang="css" scoped>
.container {
  flex-flow: row wrap;
  padding: 3rem 0;
  gap: 2.4rem;
}

.websites-page {
  margin-block-end: 2rem;
  width: 100%;

  & .websites-page__headline {
    font-size: var(--text-3xl);
    margin-bottom: 1rem;
  }

  & .websites-page__description {
    font-size: var(--text-lg);
    opacity: 0.8;
    max-width: 71ch;
    margin-bottom: 3rem;
    color: var(--color-silver-600);
  }
}

.websites-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 600px), 1fr));
}

@media (--vw-sm) {
  .container {
    height: 100%;
  }

  .websites-grid {
    grid-template-columns: 1fr;
  }
}
</style>
