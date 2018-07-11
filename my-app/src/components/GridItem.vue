<template>
  <div class="grid-item">
    <slot/>
  </div>
</template>


<style lang="scss" scoped>
.grid-item {
  padding: 1rem;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  background-color: darken(#f2f2f2, 5%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  cursor: pointer;

  &:hover {
    background-color: darken(#f2f2f2, 10%);
  }
}
</style>
