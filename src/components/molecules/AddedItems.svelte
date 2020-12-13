<script>
  import {createEventDispatcher} from "svelte";
  import Item from "../atoms/Item.svelte";

  const dispatch = createEventDispatcher();

  export let data = [];
  export let legend = '';
</script>

<fieldset id="added-items">
  <legend>{legend.length ? legend : 'New Chart'}</legend>
  {#each data as item}
    <Item item={item} on:click={() => dispatch('removeItem', item)} />
  {/each}
</fieldset>

<style>
  #added-items {
    border: 1px dotted skyblue;
    border-radius: 2px;
    margin-bottom: 10px;
  }
</style>