<script>
  export let selected;
  export let options = [];
</script>

<select id="options" bind:value={selected} on:change>
  {#each options as option}
    <option>{option}</option>
  {/each}
</select>

<style>
  #options {
    width: 90px;
    padding: 3px 0;
    border: 1px dotted skyblue;
    box-shadow: 0 0 4px grey;
  }

  #options:hover {
    border: 1px solid skyblue;
  }
</style>