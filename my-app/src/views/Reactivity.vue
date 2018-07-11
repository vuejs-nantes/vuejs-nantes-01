<template>
  <div class="reactivity">
    <div class="reactivity__left">
      <div class="reactivity__form">
        <div class="reactivity__group">
          <label class="reactivity__label">Prénom</label>
          <input class="reactivity__input" v-model="firstname">
        </div>
        <div class="reactivity__group">
          <label class="reactivity__label">Nom</label>
          <input class="reactivity__input" v-model="lastname">
        </div>
      </div>
    </div>
    <div class="reactivity__center">
      <div class="reactivity__card">
        <div class="reactivity__card-body">
          <h1 class="reactivity__title">{{ name }}</h1>
        </div>
      </div>
    </div>
    <div class="reactivity__right">
      <div class="reactivity__right-part">
        <h1 class="reactivity__title">Mes data</h1>
        <div class="reactivity__code">
          {{ this.$data }}
        </div>
      </div>

      <div class="reactivity__right-part">
        <h1 class="reactivity__title">Mon computed</h1>
        <div class="reactivity__code">
          {{ this.name }}
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      firstname: 'OnepunchMan',
      lastname: 'Saitama',
    }
  },

  computed: {
    name() {
      return `${this.firstname} ${this.lastname}`.trim();
    }
  }
}
</script>


<style lang="scss" scoped>
.reactivity {
  display: flex;
  height: 100vh;

  &__group {
    display: flex;
    flex-flow: row;
    align-items: center;

    & ~ & {
      margin-top: 1rem;
    }
  }

  &__label {
    width: 4rem;
  }

  &__card {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  }

  &__card-body {
    padding: 1rem;
  }

  &__title {
    font-size: 1.2rem;
    color: #212121;
    text-align: center;
  }
  
  &__left {
    flex: 1;
    background-color: darken(#fefefe, 2%);

    display: flex;
    justify-content: center;
    align-items: center;
  }


  &__code {
    background-color: #212121;
    color: #fefefefe;
    padding: 1rem;
    border-radius: 10px;
  }

  &__center {
    padding: 1rem;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__right {
    padding: 1rem;
    flex: 1;
    background-color: darken(#fefefe, 2%);

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

}
</style>
