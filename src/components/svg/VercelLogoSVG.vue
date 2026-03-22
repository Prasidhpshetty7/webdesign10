<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 76 76" class="svg">
    <title>Deployed on Vercel</title>
    <path fill="currentColor" d="M38 0L76 66H0L38 0z" />
  </svg>
</template>

<style scoped>
.svg {
  fill: var(--color-default-white);
  transition: fill 0.3s ease;
}

.svg:hover {
  fill: var(--color-primary);
}

body[data-theme='light'] .svg {
  fill: var(--color-default-black);
}

body[data-theme='light'] .svg:hover {
  fill: var(--color-primary);
}
</style>
