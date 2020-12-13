<script>
  export let value = '';
  export let placeholder = '';
  export let width = 70;
</script>

<input
  placeholder={placeholder}
  bind:value={value}
  style="width: {width}px"
  type="number"
  class="num-input"
  />

<style>
  .num-input {
    padding: 4px 6px;
    border: 1px dotted skyblue;
    box-shadow: 0 0 4px grey;
  }

  .num-input:hover {
    border: 1px solid skyblue;
  }
</style>