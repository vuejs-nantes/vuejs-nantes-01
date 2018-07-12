<template>
  <div class="css-scoped">
    <StyledLabel>IM FABULOUS 🦄</StyledLabel>
    <label class="styled-scoped">J'ai la même class mais je n'ai toujours pas autant la classe 😞</label>
    <StyledLabel class="styled-scoped-override">Override dans le parent pour de la composition ! 🎉</StyledLabel>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import StyledLabel from '@/components/StyledLabel.vue';

export default {
  components: { StyledLabel },
}
</script>


<style lang="scss">
.styled-scoped {
  color: #F58F84;
  font-size: 2rem;
  text-align: center;
}
</style>


<style lang="scss" scoped>
.css-scoped {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: #212121;

  & > * {
    margin-bottom: 1rem;
  }

  .styled-scoped-override {
    color: #C93756;
    font-size: 4rem;
  }
}


</style>
