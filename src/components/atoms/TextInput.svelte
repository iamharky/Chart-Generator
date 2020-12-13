<script>
  export let value = '';
  export let placeholder = '';
  export let width = 70;
</script>

<input
  placeholder={placeholder}
  bind:value={value}
  style="width: {width}px"
  type="text"
  class="text-input"
  />

<style>
  .text-input {
    padding: 4px 6px;
    border: 1px dotted skyblue;
    box-shadow: 0 0 4px grey;
  }

  .text-input:hover {
    border: 1px solid skyblue;
  }
</style>