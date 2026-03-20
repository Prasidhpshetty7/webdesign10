<template>
  <article :class="styles">
    <div class="website-preview-metadata">
      <span class="website-preview__tags">{{ tags }}</span>
    </div>

    <h4 :id="websiteId" class="website-preview__title">{{ title }}</h4>

    <Tag v-show="size === 'short' && featured" tag-name="FEATURED" variant="accent" />
    
    <template v-if="size === 'long'">
      <p class="website-preview__description">
        {{ description }}
      </p>
      <Button 
        color-scheme="white" 
        :href="url" 
        :aria-describedby="websiteId"
        is-external
      > 
        Visit Website 
      </Button>
    </template>
    
    <AppLink v-else :to="url" is-external class="website-link">
      <span class="sr-only">Visit {{ title }}</span>
    </AppLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  websiteId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  tags: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'short',
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const styles = computed(() => ({
  'website-preview': true,
  'website-preview--long': props.size === 'long',
  'website-preview--short': props.size === 'short',
}))
</script>

<style scoped>
.website-preview {
  --max-lines: 3;

  display: flex;
  position: relative;
  width: 100%;
  padding: 1.125rem;
  border-radius: var(--radius-default);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease-out;
    background: linear-gradient(to bottom, hsl(0deg 0% 100% / 0%) 37%, hsl(218deg 11% 52% / 20%) 100%);
    z-index: var(--z-hide);
  }

  &:hover::after {
    opacity: 1;
  }
}

.website-preview-metadata {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.website-preview__tags {
  opacity: 0.7;
  font-size: var(--text-sm);
  color: var(--secondary-text-color, var(--color-default-white));
}

.website-preview__description {
  display: -webkit-box;
  -webkit-line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  line-clamp: var(--max-lines);
  overflow: hidden;
  color: var(--color-gray-200);
  margin-bottom: 1rem;
}

.website-preview__title {
  margin-bottom: 0.5rem;
}

.website-preview--long {
  flex-direction: column;
  max-width: 700px;

  & .website-preview__title {
    font-size: var(--text-xl);
  }
}

.website-preview--short {
  position: relative;
  background-color: var(--bg-color-lighter, var(--color-default-black));
  background-clip: padding-box;
  align-items: center;
  gap: 1rem;

  &::before {
    --border-color: var(--color-silver);

    background: linear-gradient(11deg, transparent 70%, var(--border-color)), linear-gradient(190deg, transparent 70%, var(--border-color));
    border-radius: inherit;
    content: "";
    margin: -1px;
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  & .website-link {
    margin: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:focus::after {
      box-shadow: 0 4px 10px hsl(187deg 78% 46% / 50%);
    }
  }
}

.website-preview a:not(.button) {
  color: inherit;

  &:hover {
    text-decoration: unset;
  }

  &:hover .website-preview__title {
    color: var(--color-primary);
    transition: color 300ms ease-in-out;
  }

  &:focus:not(:focus-visible) {
    outline-color: transparent;
  }
}

.website-preview .button:active {
  transform: translateY(4px);
  transition: transform 200ms ease-out;
}

body[data-theme='light'] {
  & .website-preview {
    box-shadow: var(--elevation-3);

    & .website-preview__description {
      color: var(--color-gray-600);
    }
  }

  & a:hover .website-preview,
  & a:focus .website-preview {
    box-shadow: 0 4px 10px hsl(187deg 78% 46% / 20%);
  }
}
</style>
