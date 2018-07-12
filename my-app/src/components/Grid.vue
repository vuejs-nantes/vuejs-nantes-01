<template>
  <div class="grid">
    <div class="grid__part">
      <button type="button" @click="toggle">Toggle</button>
    </div>
    <div class="grid__part" v-if="show">
      <transition-group name="fade" class="grid__content" v-on:before-enter="beforeEnter" appear>
        <GridItem v-for="n in 50" :key="n" :data-index="n">{{ n }}</GridItem>
      </transition-group>
    </div>
  </div>
</template>

<script>
import GridItem from './GridItem.vue'

export default {
  components: { GridItem },

  data () {
    return {
      show: false
    }
  },

  methods: {
    beforeEnter: function (el, done) {
      var delay = el.dataset.index * 30
      el.style['transition-delay'] = `${delay}ms`
    },

    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;

  &__part {
    margin-bottom: 1rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
}

// --------- VueJS basic animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
