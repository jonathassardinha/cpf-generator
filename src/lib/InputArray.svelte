<script lang="ts">
  export let numberOfInputs: number = 3;
  export let value: string = "";

  let valueArray = Array(numberOfInputs).fill("");
  let refArray: Array<HTMLInputElement> = Array(numberOfInputs);

  $: {
    value = valueArray.join("");
  }
</script>

<div>
  {#each valueArray as _, i}
    <input
      class="input"
      name={`input${i}`}
      bind:value={valueArray[i]}
      bind:this={refArray[i]}
      on:keydown={(event) => {
        if (event.key === "Backspace") {
          if (event.currentTarget.value === "") {
            if (i === 0) return;
            return refArray[i - 1].focus();
          }
          return;
        }

        if (event.key === "Tab") return;

        event.preventDefault();
        event.stopPropagation();

        if (!event.key.match(/^\d$/)) return;

        valueArray[i] = event.key;

        if (i === numberOfInputs - 1) return;
        return refArray[i + 1].focus();
      }}
      maxlength="1"
    />
  {/each}
</div>

<style>
  div {
    display: flex;
    gap: 0.5rem;
  }
</style>
