<script>
  export let item = {};
</script>

<span on:click class="item">
  {item.label} : {item.value}
</span>

<style>
  .item {
    background-color: green;
    color: white;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all .3s
  }

  .item:hover {
    background-color: indigo;
    box-shadow: 0 0 8px grey;
  }
</style>