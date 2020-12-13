<script>
  export let item = {};
</script>

<span on:click class="added-item">
  {item.label} : {item.value}
</span>

<style>
  .added-item {
    background-color: green;
    color: white;
    padding: 2px 6px;
    border-radius: 2px;
    font-family: Segoe UI;
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all .3s
  }

  .added-item:hover {
    background-color: indigo;
    box-shadow: 0 0 8px grey;
  }
</style>