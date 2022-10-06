<script lang="ts" strictEvents>
</script>

<input {...$$props} on:keydown />

<style lang="scss">
  .input {
    text-align: center;
    font-size: 4rem;
    padding: 0.4rem;
    width: 4rem;

    background: none;
    border: none;
    border-bottom: 1px solid gray;

    &:focus-visible {
      outline: none;
      border-bottom: 2px solid white;
    }
  }
</style>
