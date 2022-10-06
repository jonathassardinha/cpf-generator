<script lang="ts">
  import InputArray from "./lib/InputArray.svelte";
  function calculateDigit(numbers: string) {
    const multiplier = numbers.length + 1;

    let calculatedVerifier = numbers
      .split("")
      .reduce(
        (acc, curr, index) => acc + parseInt(curr, 10) * (multiplier - index),
        0
      );

    calculatedVerifier %= 11;

    calculatedVerifier = calculatedVerifier < 2 ? 0 : 11 - calculatedVerifier;

    return calculatedVerifier;
  }

  let arrayValue: string = "";

  let firstDigit: string = "";
  let secondDigit: string = "";

  $: {
    if (arrayValue.length === 9) {
      firstDigit = calculateDigit(arrayValue).toString();
      secondDigit = calculateDigit(`${arrayValue}${firstDigit}`).toString();
    }
  }
</script>

<main>
  <h1>CPF Generator</h1>

  <div class="content-wrapper">
    <div class="input-wrapper">
      <InputArray bind:value={arrayValue} numberOfInputs={9} />
      <input
        class="input"
        value={arrayValue.length === 9 ? firstDigit : ""}
        disabled
      />
      <input
        class="input"
        value={arrayValue.length === 9 ? secondDigit : ""}
        disabled
      />
    </div>
    <button
      disabled={arrayValue.length !== 9}
      on:click={() => {
        navigator.clipboard.writeText(
          `${arrayValue}${firstDigit}${secondDigit}`
        );
      }}>Copy</button
    >
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;

    height: 100%;
    padding: 5rem;
  }

  h1 {
    font-size: 7rem;
  }

  .content-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  button {
    padding: 2rem 4rem;
    text-transform: uppercase;

    &:not(:disabled) {
      cursor: pointer;
    }
  }
</style>
