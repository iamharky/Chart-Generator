<script>
  import {createEventDispatcher} from "svelte";
  import AddingItem from "../atoms/AddingItem.svelte";
  import AddItemForm from "../molecules/AddItemForm.svelte";
  
  let label = '';
  let value = '';

  const dispatch = createEventDispatcher();

  const addItem = () => {
    dispatch('addItem', {label, value});
    label = '';
    value = '';
  };
</script>

{#if label.length > 0}
  <p id="new-item-container">
    <AddingItem label={label} value={value} />
  </p>
{/if}
<AddItemForm bind:label={label} bind:value={value} on:click={addItem} />

<style>
  #new-item-container {
    display: flex;
  }
</style>