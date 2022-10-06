<script lang="ts">
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

  let value: string = "";
  let firstDigit: string = "";
  let secondDigit: string = "";
  let calculatedCpf: string = "___.___.___-__";

  $: {
    if (value.length === 9) {
      firstDigit = calculateDigit(value).toString();
      secondDigit = calculateDigit(`${value}${firstDigit}`).toString();
    }
  }

  $: {
    const digits = value.length === 9 ? `${firstDigit}${secondDigit}` : "__";

    calculatedCpf = `${value
      .padEnd(9, "_")
      .match(/.{3}/g)
      .join(".")}-${digits}`;
  }

  function calculateCpf() {
    alert("new cpf");
  }
</script>

<main>
  <h1>CPF Generator</h1>

  <div class="content-wrapper">
    <h2>{calculatedCpf}</h2>
    <input name="cpf" bind:value maxlength="9" size="6" />
  </div>
</main>

<style>
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

  h2 {
    font-size: 5rem;
  }

  .content-wrapper {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  input {
    text-align: center;
    padding: 1rem;
    font-size: 4rem;
  }
</style>
