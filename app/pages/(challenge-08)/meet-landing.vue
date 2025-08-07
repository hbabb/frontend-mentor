<template>
  <div class="container">
    <header class="header">
      <nav class="header__nav">
        <img
          src="/challenge-08/images/logo.svg"
          alt="meet logo"
          width="119"
          height="28"
        >
      </nav>
    </header>
    <section class="hero" aria-labelledby="hero-heading">
      <div class="hero__img">
        <img
          src="/challenge-08/images/desktop/image-hero-left.png"
          alt=""
          width="394"
          height="303"
          class="hero__img__left"
        >
        <img
          src="/challenge-08/images/desktop/image-hero-right.png"
          alt=""
          width="394"
          height="303"
          class="hero__img__right"
        >
      </div>
      <div class="hero__action">
        <h1 id="hero-heading" class="hero__action__title text-preset-1">
          Group Chat for Everyone
        </h1>
        <p class="hero__action__description text-preset-4">
          Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
        </p>
        <div class="hero__action__btn-group">
          <a href="#" class="btn blue text-preset-5">
            Download <span>v1.3</span>
          </a>
          <a href="#" class="btn purple text-preset-5">
            What is it?
          </a>
        </div>
      </div>
    </section>
    <section class="content" aria-label="main-content">
      <div class="content__head">
        <div class="content__head__line" />
        <p class="content__head__number text-preset-5">
          01
        </p>
      </div>
      <div class="content__picture">
        <img
          src="/challenge-08/images/desktop/image-woman-in-videocall.jpg"
          alt="Woman on video call"
          width="510"
          height="484"
          class="content__picture__img"
        >
        <img
          src="/challenge-08/images/desktop/image-women-videochatting.jpg"
          alt="Woman on video call"
          width="510"
          height="484"
          class="content__picture__img"
        >
        <img
          src="/challenge-08/images/desktop/image-men-in-meeting.jpg"
          alt="Woman on video call"
          width="510"
          height="484"
          class="content__picture__img"
        >
        <img
          src="/challenge-08/images/desktop/image-man-texting.jpg"
          alt="Woman on video call"
          width="510"
          height="484"
          class="content__picture__img"
        >
      </div>
      <div class="content__info">
        <div class="content__info__title">
          <p class="content__info__title__tagline text-preset-3">
            Built for modern use
          </p>
          <h2 class="content__info__title__heading text-preset-2">
            Smarter meetings, all in one place
          </h2>
        </div>
        <p class="content__info__description text-preset-4">
          Send messages, share files, show your screen, and record your meetings - all in one workspace. Control who can join with invite-only team access, data encryption, and data export.
        </p>
      </div>
    </section>
    <footer class="cta">
      <div class="cta__head">
        <div class="cta__head__line" />
        <p class="cta__head__number text-preset-5">
          02
        </p>
      </div>
      <div class="cta__hero">
        <div class="cta__hero__content">
          <h2 class="cta__hero__content__title text-preset-2">
            Experience more together
          </h2>
          <p class="cta__hero__content__description text-preset-4">
            Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
          </p>
          <a href="#" class="cta__hero__content__btn btn purple text-preset-5">
            <p class="cta__hero__content__btn__text text-preset-5">Download</p>
            <p class="cta__hero__content__btn__version text-preset-5">v1.3</p>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$color-cyan-600: #4d96a8;
$color-cyan-300: #90e4f9;
$color-purple-600: #845eb0;
$color-purple-300: #d9b8ff;
$color-slate-900: #28283e;
$color-slate-600: #86869c;
$color-slate-300: #d2d2e0;
$color-white: #fafafa;
$space-1400: 7rem; /*112px*/
$space-1000: 5rem; /*80px*/
$space-900: 4.5rem; /*72px*/
$space-800: 4rem; /*64px*/
$space-700: 3.5rem; /*56px*/
$space-600: 3rem; /*48px*/
$space-500: 2.5rem; /*40px*/
$space-400: 2rem; /*32px*/
$space-300: 1.5rem; /*24px*/
$space-200: 1rem; /*16px*/
$space-100: 0.5rem; /*8px*/
$space-50: 0.25rem; /*4px*/

.text-preset-1 {
  font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  font-size: clamp(2.5rem, 1.971830985915493rem + 2.253521126760563vw, 4rem);
  line-height: 110%;
  letter-spacing: 0;
  font-feature-settings:
    "liga" off,
    "clig" off;

  @media (min-width: 40rem) {
    font-size: 4rem;
  }
}

.text-preset-2 {
  font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 2rem;
  font-size: clamp(2rem, 1.823943661971831rem + 0.7511737089201878vw, 2.5rem);
  line-height: 110%;
  letter-spacing: 0;
  font-feature-settings:
    "liga" off,
    "clig" off;
}

.text-preset-3 {
  font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  font-size: clamp(0.75rem, 0.6619718309859155rem + 0.3755868544600939vw, 1rem);
  line-height: 110%;
  letter-spacing: 0.25rem;
  font-feature-settings:
    "liga" off,
    "clig" off;
}

.text-preset-4 {
  font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  font-size: clamp(1rem, 0.9559859154929577rem + 0.18779342723004694vw, 1.125rem);
  line-height: 110%;
  letter-spacing: 0;
  font-feature-settings:
    "liga" off,
    "clig" off;
}

.text-preset-5 {
  font-family: "Red Hat Display", Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0;
  font-feature-settings:
    "liga" off,
    "clig" off;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: safe center;
  align-items: center;
  background: $color-white;
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  padding: $space-600 $space-1000 0 $space-1000;
  justify-content: flex-end;
  align-items: center;
  gap: $space-100;
  align-self: stretch;

  @media (min-width: 90rem) {
    padding: $space-1000 $space-1000 0 $space-1000;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  padding: $space-800 $space-400 $space-400;
  align-items: center;
  align-self: stretch;
  gap: $space-600;

  &__img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 1.0625rem;
    max-width: 200%;
    width: 68%;
    flex-shrink: 0;
  }

  &__action {
    display: flex;
    flex-direction: column;
    gap: $space-300;

    &__title,
    &__description {
      text-align: center;
    }

    &__title {
      color: $color-slate-900;
    }

    &__description {
      align-self: stretch;
      color: $color-slate-600;
    }
    &__btn-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $space-200;
      color: $color-white;
    }
  }

  @media (min-width: 48rem) {
    padding: $space-800 $space-400;

    &__img {
      gap: 2rem;
    }

    &__action {
      margin-inline: 7.24rem;

      &__btn-group {
        flex-direction: row;
        margin-inline: auto;
      }
    }
  }

  @media (min-width: 90rem) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: $space-800 0;
    gap: $space-400;
    align-items: center;

    &__img {
      display: contents;

      &__left {
        grid-column: 1;
        justify-self: start;
        margin-left: -1.5rem;
        margin-bottom: 3.56rem;
      }

      &__right {
        grid-column: 3;
        justify-self: end;
        margin-right: -1.5rem;
        margin-top: 3.56rem;
      }
    }

    &__action {
      grid-column: 2;
      grid-row: 1;
      margin-inline: 0;
    }
  }
}

a,
.btn {
  padding: $space-200 $space-500;
  border-radius: 1.8125rem;
}
.blue {
  background: $color-cyan-600;
  span {
    color: $color-cyan-300;
  }
}

.purple {
  background: $color-purple-600;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: $space-800;
  padding: $space-400 $space-400 $space-800;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__line {
      width: 0.0625rem;
      height: $space-1000;
      background: $color-slate-300;
    }

    &__number {
      width: $space-700;
      height: $space-700;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      border: 1px solid $color-slate-300;
      color: $color-slate-600;
    }
  }

  &__picture {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: $space-200;
    align-self: stretch;

    &__img {
      border-radius: $space-100;
      background: #d8d8d8;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: $space-400;
    align-self: stretch;

    &__title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $space-200;
      align-self: stretch;

      &__tagline {
        color: $color-cyan-600;
        text-align: center;
        text-transform: uppercase;
      }

      &__heading {
        color: $color-slate-900;
        text-align: center;
      }
    }

    &__description {
      color: $color-slate-600;
      text-align: center;
    }
  }

  @media (min-width: 48rem) {
    padding: $space-700 $space-400 $space-800;

    &__picture {
      grid-template-columns: repeat(4, 1fr);
      gap: $space-300;
    }

    &__info {
      margin-inline: 5.5rem;
    }
  }

  @media (min-width: 90rem) {
    padding: $space-700 10rem $space-900;

    &__info {
      margin-inline: 18rem;
    }
  }
}

.cta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(1.75rem);

    &__line {
      width: 0.0625rem;
      height: $space-1000;
      background: $color-slate-300;
    }

    &__number {
      width: $space-700;
      height: $space-700;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      border: 1px solid $color-slate-300;
      color: $color-slate-600;
      background: $color-white;
    }
  }

  &__hero {
    display: grid;
    align-items: center;
    align-self: stretch;
    padding: $space-800 $space-400;
    gap: $space-800;
    background-image:
      linear-gradient(rgba(88, 154, 171, 0.85), rgba(88, 154, 171, 0.85)),
      url("/challenge-08/images/tablet/image-footer.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &__content {
      display: grid;
      align-items: center;
      gap: $space-300;
      align-self: stretch;

      &__title {
        text-align: center;
        color: $color-white;
      }

      &__description {
        text-align: center;
        color: $color-white;
      }

      &__btn {
        display: flex;
        padding: $space-200 $space-500;
        flex-direction: row;
        align-items: center;
        justify-self: center;
        gap: $space-100;

        &__text {
          color: $color-white;
        }

        &__version {
          color: $color-purple-300;
        }
      }

      @media (min-width: 48rem) {
        margin-inline: calc(8.25rem - $space-400);
      }
    }

    @media (min-width: 90rem) {
      background-image:
        linear-gradient(rgba(88, 154, 171, 0.85), rgba(88, 154, 171, 0.85)),
        url("/challenge-08/images/desktop/image-footer.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: $space-1400 $space-1000;
      width: 100%;

      &__content {
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 2rem;
        align-self: stretch;
        margin-inline: 5rem;

        &__title {
          text-align: left;
        }

        &__description {
          text-align: left;
          width: 22rem;
        }

        &__btn {
          align-items: start;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
