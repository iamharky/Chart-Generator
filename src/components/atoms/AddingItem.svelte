<script>
  export let label = '';
  export let value = '';
</script>

<span id="adding-item">{label} : {value}</span>

<style>
  #adding-item {
    display: inline-block;
    background-color: darkorange;
    color: white;
    padding: 2px 4px;
    border-radius: 2px;
    font-weight: bold;
    margin: 0 auto;
    box-shadow: 0 0 4px grey;
  }  
</style>