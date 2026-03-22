<template>
  <div class="project-card">
    <div class="project-card__content">
      <div class="project-card__header">
        <h4 :id="titleId">{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
      <div class="project-card__footer">
        <TagGroup :tags="tags.split(',')" />
        <AppLink :id="buttonId" variant="button" full is-external :to="github"
          :aria-labelledby="`${titleId} ${buttonId}`">
          Github
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
})

const titleSlug = props.title.toLowerCase().replaceAll(' ', '')

const titleId = computed(() => `title-${titleSlug}`)
const buttonId = computed(() => `button-${titleSlug}`)
</script>

<style scoped>
.project-card {
  display: flex;
  width: 100%;
}

.project-card__content {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  background-color: var(--bg-color-lighter, var(--color-gray-800));
  padding: 1.125rem;
  border-radius: var(--radius-default);
  border: 1px solid transparent;
}

.project-card__header {
  & h4 {
    font-size: var(--text-lg);
  }

  & p {
    margin-block-end: 10px;
    opacity: 0.7;
  }
}

.project-card__footer {
  .tags {
    margin-block-end: 1rem;
  }
}

body[data-theme='light'] {
  .project-card__content {
    border: var(--border);
  }
}

@media (--vw-sm) {
  .project-card {
    flex-direction: column;
  }
}
</style>
