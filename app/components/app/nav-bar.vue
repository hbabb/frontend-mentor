<template>
  <header class="navbar">
    <NuxtLink to="/" aria-label="Home">
      <NuxtImg
        src="/logo-desktop.svg"
        width="196"
        height="28"
        class="logo-desktop"
        alt="Frontend Mentor Logo & Home Link"
      />
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem /* 8px */;
  min-height: 4rem /* 64px */;
}

.logo-desktop {
  display: block;
  color: transparent;
}
</style>
