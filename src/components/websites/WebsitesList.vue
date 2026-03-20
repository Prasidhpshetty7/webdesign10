<template>
  <div class="websites-list container">
    <h3 id="websites-heading">Featured Websites</h3>
    <p class="websites-subtitle">
      Explore my collection of web design projects, from interactive 3D experiences to modern portfolio designs
    </p>
    <WebsitePreview 
      v-for="website in featuredWebsites" 
      :key="website.id" 
      :title="website.title"
      :url="website.url" 
      :website-id="website.id"
      :description="website.description"
      :tags="website.tags"
      :featured="website.featured"
    />
    <Button 
      id="view-all-websites" 
      variant="outline" 
      href="/websites" 
      aria-labelledby="view-all-websites websites-heading"
    >
      View all websites
    </Button>
  </div>
</template>

<script setup>
import { getFeaturedWebsites } from '@/composables/useWebsites'
import WebsitePreview from './WebsitePreview.vue'

const featuredWebsites = getFeaturedWebsites(4)
</script>

<style scoped>
.websites-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: min(160ch, 100% - 2rem);

  & #websites-heading {
    text-transform: uppercase;
    flex-basis: 100%;
    margin-bottom: 0;
  }

  & .websites-subtitle {
    flex-basis: 100%;
    font-size: clamp(var(--text-base), 1vw + var(--text-base), var(--text-lg));
    color: var(--color-silver-600);
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
