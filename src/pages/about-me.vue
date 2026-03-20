<template>
  <div class="container">
    <ParticlesBackground :quantity="100" :staticity="10" :ease="100" :vx="0" :vy="0" />
    <main id="main-content">
      <article class="about-content">
        <picture>
          <img src="@/assets/img/style_profile.png" alt="me" loading="lazy" />
        </picture>
        <h1 class="about-content__headline">About me</h1>

        <p>
          👋 Hey! How are you?
          I'm Prasidh P Shetty. I'm a
          <strong>Web Designer and Full-Stack Developer</strong> passionate about
          <em> building </em> modern, visually engaging, and user-focused digital experiences.
        </p>
        <p>
          I specialize in creating responsive websites and scalable web applications that combine clean design 
          with solid technical foundations. My journey in web development has been driven by curiosity and 
          a passion for continuous learning.
        </p>
        <p>
          I work across the full development stack — from crafting intuitive frontend interfaces to building 
          robust backend systems, APIs, and database architectures. I follow industry best practices such as 
          version control, agile workflows, and CI/CD pipelines to deliver high-quality, maintainable, and 
          performant solutions.
        </p>
        <p>
          With a strong sense of design and attention to detail, I believe great digital products are built 
          at the intersection of aesthetics, usability, and engineering.
        </p>
        <p>I enjoy solving complex problems and transforming ideas into impactful digital solutions.</p>
      </article>
      <SocialMediaIcons boxed />
    </main>
  </div>
</template>

<script setup>
import config from '../config/siteconfig.json'

const title = 'About me • Prasidh P Shetty'
const { description } = config
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

.about-content {
  margin-block-end: 2rem;

  & picture {
    float: left;
    shape-outside: ellipse(50% 50%);
    margin: 0 1.125rem 0 0;
    position: relative;

    & img {
      max-width: 140px;
      clip-path: circle(70px at center);
      object-fit: cover;
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 155px;
      height: 155px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      outline: 3px inset var(--color-silver);
      border-radius: 9999px;
      will-change: transform;
    }
  }

  & .about-content__headline {
    font-size: var(--text-2xl);
  }

  & p {
    font-size: var(--text-lg);
    opacity: 0.8;
    max-width: 71ch;
    margin-top: 0.50em;
  }
}

.binary-text-svg {
  font-family: var(--font-mono);
  font-size: var(--text-xl);
  position: absolute;
  left: 282px;
  top: 387px;
  opacity: 0.3;

  & :deep(tspan) {
    --text-delay: 500ms;

    opacity: 0;
    animation: pulse-spread 3s var(--text-delay) ease-out infinite alternate;

    &:nth-child(1) {
      --text-delay: 500ms;
    }

    &:nth-child(2) {
      --text-delay: 1s;
    }

    &:nth-child(3) {
      --text-delay: 1.5s;
    }

    &:nth-child(4) {
      --text-delay: 2s;
    }

    &:nth-child(5) {
      --text-delay: 2.5s;
    }

    &:nth-child(6) {
      --text-delay: 3s;
    }
  }
}

@keyframes pulse-spread {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.3;
  }
}

@media screen and (min-width: 26.625em) and (max-width: 48em) {
  aside {
    margin-inline-start: 40px;
    padding: 0 2.4rem 0 0;
  }
}

@media (--vw-sm) {
  aside {
    padding: 0 1rem;
  }

  .container {
    height: 100%;
  }

  .binary-text-svg {
    top: 50%;
    left: 0;
    bottom: 0;
  }
}
</style>
