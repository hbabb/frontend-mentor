<template>
  <header class="navbar">
    <nav class="navbar__home">
      <NuxtLink to="/">
        <NuxtImg
          src="/logo-desktop.svg"
          width="196"
          height="28"
          class="logo-desktop"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem /* 8px */;
  min-height: 4rem /* 64px */;

  /* Glass effect */
  // background: rgba(255, 255, 255, 0.5);
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  // border: 1px solid rgba(255, 255, 255, 0.2);
  // border-top: none;
  // border-left: none;
  // border-right: none;

  // /* Position fixed for floating effect */
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 100;

  // /*Optional: Add subtle shadow */
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.logo-desktop {
  display: block;
  color: transparent;
  // filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

// :global(body) {
//   padding-top: 4rem;
// }
</style>
