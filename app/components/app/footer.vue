<template>
  <footer class="attribution">
    <div>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="link"
      >Frontend Mentor</a>.
    </div>
    <div>
      Coded by
      <a
        href="https://github.com/hbabb"
        target="_blank"
        class="link"
      >Heath Babb</a>.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.attribution {
  width: 100%;
  margin-top: auto;
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .link {
    color: blue;
    text-decoration: none;

    &:hover {
      color: blueviolet;
      cursor: pointer;
      text-decoration: underline;
    }

    &:visited {
      color: purple;
    }
  }
}

@media (min-width: 48rem) {
  .attribution {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 2.5rem;
  }
}
</style>
