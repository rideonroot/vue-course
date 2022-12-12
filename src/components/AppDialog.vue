<template>
  <div :style="{ '--color': $attrs.color || '#fff' }" class="dialog">
    <div class="dialog__overlay" @click="$emit('close')"></div>
    <div class="dialog__content">
      <div class="dialog__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);

  padding: 30px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
  }

  &__content {
    position: absolute;
    background-color: transparent;
    border: none;
    z-index: 2;
  }

  &__body {
    background-color: var(--color);

    min-height: 150px;
    width: auto;

    display: inline-flex;
    flex-direction: column;
    align-items: center;

    z-index: 1;
    overflow: hidden;

    padding: 1.6rem 3rem;

    font-size: 1.2rem;
    border: 3px solid black;
    border-radius: 5px;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &__actions {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .btn {
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      padding: 0.3rem 3.4rem;

      border: 3px solid black;
      background-color: #fff;
      box-shadow: 0 0 0 black;
      transition: all 0.2s;
      cursor: pointer;
    }

    .btn:last-child {
      margin-left: 2.6rem;
    }

    .btn:hover {
      box-shadow: 0.4rem 0.4rem 0 black;
      transform: translate(-0.4rem, -0.4rem);
    }

    .btn:active {
      box-shadow: 0 0 0 black;
      transform: translate(0, 0);
    }
  }
}
</style>
