<script>
  export let color = 'green';
  export let icon;
  export let text = 'button';
</script>

<button on:click style="background-color: {color}; border-color: {color}">
  <i class={"fas fa-" + icon} /> {text}
</button>

<style>
  button {
    outline: none;
    border: 2px solid;
    border-radius: 2px;
    box-shadow: 0 0 4px gray;
    cursor: pointer;
    font-weight: bold;
    padding: 4px 6px;
    transition: all .2s;
    text-transform: uppercase;
    color: white;
  }

  button:hover {
    background-color: white !important;
    color: black;
  }
</style>