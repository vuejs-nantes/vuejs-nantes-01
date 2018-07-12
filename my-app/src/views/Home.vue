<template>
  <div class="home">
    <div class="home__part home__part--center">
      <img src="@/assets/logo.png" class="home__logo"/>
    </div>
    <div class="home__part home__part--center">
      <ul class="home__nav">
        <li class="home__nav-item"><router-link class="home__link" :to="{ name: 'reactivity' }">Réactivité</router-link></li>
        <li class="home__nav-item"><router-link class="home__link" :to="{ name: 'css-scoped' }">CSS Scoped</router-link></li>
        <li class="home__nav-item"><router-link class="home__link" :to="{ name: 'transition' }">Transition</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  &__part {
    display: flex;
    flex-flow: column;

    &--center {
      justify-content: center;
      align-items: center;
    }
  }

  &__logo {
    height: 40vh;
  }

  &__nav {
    display: inline-flex;
    list-style: none;
    font-size: 1.2rem;
  }

  &__nav-item {
    padding: 0.25rem 1rem;

    &:not(:last-child) {
      border-right: 1px solid #4DBA87;
    }
  }

  &__link {
    color: #4DBA87;
    text-decoration: none;

    &:hover, &:focus {
      color: darken(#4DBA87, 10%);
      text-decoration: underline;
    }
  }
}
</style>
