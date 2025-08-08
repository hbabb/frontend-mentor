<script setup lang="ts">
definePageMeta({ layout: "challenge" });
</script>

<template>
  <div class="container">
    <article class="card card-1">
      <div class="card__header">
        <div class="avatar-group">
          <img
            src="/challenge-07/images/image-daniel.jpg"
            alt="Daniel Avatar"
            width="56"
            height="56"
            class="avatar avatar-border"
          >
          <div class="card__text">
            <h2 class="text-preset-2">
              Daniel Clifford
            </h2>
            <h3 class="text-preset-4">
              Verified Graduate
            </h3>
          </div>
        </div>
        <img
          src="/challenge-07/images/bg-pattern-quotation.svg"
          alt=""
          width="104"
          height="102"
          class="quotation"
        >
      </div>
      <p class="text-preset-1">
        I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I
        joined. I honestly feel I got every penny's worth.
      </p>
      <p class="text-preset-3">
        "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have
        heard some people who had an amazing experience here. I signed up for the free intro course and found it
        incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of
        my life. Since completing the course, I've successfully switch careers, working as a Software Engineer at a
        VP startup."
      </p>
    </article>

    <article class="card card-2">
      <div class="card__header">
        <img
          src="/challenge-07/images/image-jonathan.jpg"
          alt="Jonathan Avatar"
          width="56"
          height="56"
          class="avatar"
        >
        <div class="card__text">
          <h2 class="text-preset-2">
            Jonathan Walters
          </h2>
          <h3 class="text-preset-4">
            Verified Graduate
          </h3>
        </div>
      </div>
      <p class="text-preset-1">
        The team was very supportive and kept me motivated
      </p>
      <p class="text-preset-3">
        "I started as a total newbie with virtually no coding skills. I know work as a mobile engineer for a big
        company. This was one of the best investments I've made in myself."
      </p>
    </article>

    <article class="card card-3">
      <div class="card__header">
        <img
          src="/challenge-07/images/image-jeanette.jpg"
          alt="Jeanette Avatar"
          width="56"
          height="56"
          class="avatar"
        >
        <div class="card__text">
          <h2 class="text-preset-2">
            Jeanette Harmon
          </h2>
          <h3 class="text-preset-4">
            Verified Graduate
          </h3>
        </div>
      </div>
      <p class="text-preset-1">
        An overall wonderful and rewarding experience
      </p>
      <p class="text-preset-3">
        "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing
        something I love."
      </p>
    </article>

    <article class="card card-4">
      <div class="card__header">
        <img
          src="/challenge-07/images/image-patrick.jpg"
          alt="Patrick Avatar"
          width="56"
          height="56"
          class="avatar avatar-border"
        >
        <div class="card__text">
          <h2 class="text-preset-2">
            Patrick Abrams
          </h2>
          <h3 class="text-preset-4">
            Verified Graduate
          </h3>
        </div>
      </div>
      <p class="text-preset-1">
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning
        from their experiences was easy.
      </p>
      <p class="text-preset-3">
        "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me
        the confidence necessary to be able to go out in the world and present myself as a capable junior developer.
        The standard is above the rest. You will get the personal attention you need from an incredible community of
        smart and amazing people."
      </p>
    </article>

    <article class="card card-5">
      <div class="card__header">
        <img
          src="/challenge-07/images/image-kira.jpg"
          alt="Kira Avatar"
          width="56"
          height="56"
          class="avatar"
        >
        <div class="card__text">
          <h2 class="text-preset-2">
            Kira Whittle
          </h2>
          <h3 class="text-preset-4">
            Verified Graduate
          </h3>
        </div>
      </div>
      <p class="text-preset-1">
        Such a life-changing experience. Highly recommended!
      </p>
      <p class="text-preset-3">
        "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals
        who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who
        can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They
        were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was
        outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've
        often referred to it during interviews as an example of my development experience. It certainly helped me
        land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
      </p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
$color-black: oklch(18.22% 0.00002 271.152); /*#121212*/
$color-darkBlue: oklch(24.294% 0.02708 262.553); /*#19202d*/
$color-white: oklch(100% 0.00011 271.152); /*#ffffff*/
$color-grey-100: oklch(93.59% 0.00639 255.741); /*#e7eaee*/
$color-grey-200: oklch(85.452% 0.0001 271.152); /*#cfcfcf*/
$color-grey-400: oklch(53.569% 0.02766 270.067); /*#676d7e*/
$color-grey-500: oklch(44.675% 0.03841 259.945); /*#48556a*/
$color-purple-50: oklch(93.404% 0.03747 300.772); /*#ede4ff*/
$color-purple-300: oklch(66.713% 0.18104 300.153); /*#a775f1*/
$color-purple-500: oklch(50.71% 0.20064 295.792); /*#733fc8*/
$space-500: 2.5rem; /*40px*/
$space-400: 2rem; /*32px*/
$space-300: 1.5rem; /*24px*/
$space-200: 1rem; /*16px*/
$space-100: 0.5rem; /*8px*/
$space-50: 0.25rem; /*4px*/

.text-preset-1 {
  font-family: "Barlow Semi Condensed", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 120%;
  letter-spacing: 0;
}

.text-preset-2 {
  font-family: "Barlow Semi Condensed", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 110%;
  letter-spacing: 0;
}

.text-preset-3 {
  font-family: "Barlow Semi Condensed", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 140%;
  letter-spacing: 0;
}

.text-preset-4 {
  font-family: "Barlow Semi Condensed", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.6875rem;
  line-height: 110%;
  letter-spacing: 0;
}

.container {
  padding: $space-400 $space-200;
  display: flex;
  flex-direction: column;
  justify-content: safe center;
  align-items: center;
  gap: $space-400;
  background: oklch(97.12% 0.00176 322.66);
}

.card {
  display: flex;
  flex-direction: column;
  padding: $space-400;
  justify-content: center;
  align-items: flex-start;
  gap: $space-200;
  align-self: stretch;
  border-radius: $space-100;
  box-shadow: 3rem 4.25rem 3.125rem -2.9375rem rgba(72, 85, 106, 0.25);
  z-index: 0;

  p {
    align-self: stretch;
    width: 100%;
  }

  &__header {
    display: flex;
    flex-direction: row;
    gap: 1.0625rem;

    .avatar {
      width: 1.75rem;
      height: auto;
      border-radius: 100%;
    }

    .avatar-border {
      border: 0.125rem solid $color-purple-300;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $space-50;
  }

  .avatar-group {
    display: flex;
    flex-direction: row;
    gap: 1.0625rem;
  }
}

.card-1 {
  background: $color-purple-500;
  color: $color-white;
}

.card-2 {
  background: $color-grey-500;
  color: $color-white;
}

.card-3,
.card-5 {
  background: $color-white;
  color: $color-grey-500;
}

.card-4 {
  background: $color-darkBlue;
  color: $color-white;
}

.quotation {
  display: none;
}

@media (min-width: 48rem) {
  .container {
    padding: 5.1875rem 3.8125rem 7.0625rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .card-1,
  .card-4,
  .card-5 {
    grid-column: span 2;
  }

  .card-1 {
    position: relative;

    .quotation {
      display: block;
      position: absolute;
      left: 23.5rem;
      top: 0;
      z-index: -1;
    }
  }
}

@media (min-width: 90rem) {
  .container {
    padding: 14.3125rem 10.0625rem 13.625rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .card-1,
  .card-4 {
    grid-column: span 2;
  }

  .card-5 {
    grid-column: 4;
    grid-row: 1 / 3;
  }
}
</style>
