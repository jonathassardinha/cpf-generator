<script lang="ts">
  export let newProp: number = 0;
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
  newProp {newProp}
</button>
