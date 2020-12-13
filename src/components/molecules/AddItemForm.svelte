<script>
  import NumInput from "../atoms/NumInput.svelte";
  import TextInput from "../atoms/TextInput.svelte";
  import Button from "../atoms/Button.svelte";

  export let label = '';
  export let value = '';
</script>

<div class="control-row">
  <TextInput bind:value={label} placeholder="Label" />
  <NumInput bind:value={value} placeholder="Value" />
  <Button color="green" icon="plus" text="add" on:click />
</div>

<style>
  .control-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    width: 400px
  }
</style>