<script>
  import {createEventDispatcher} from "svelte";
  import Button from "../atoms/Button.svelte";
  import Options from "../atoms/Options.svelte";
  import TextInput from "../atoms/TextInput.svelte";
  
  const dispatch = createEventDispatcher();

  export let chartName = '';
  export let selected;
  let options = ['bar', 'line', 'radar', 'pie', 'doughnut', 'polarArea'];

  const changeSelected = e => dispatch('changeSelected', e.target.value);

  const generateChart = () => dispatch('generateChart');

  const downloadChart = () => {
    var link = document.createElement('a');
    link.download = `${chartName.length ? chartName : 'New Chart'}.png`;
    link.href = document.getElementById("chart").toDataURL()
    link.click();
  };
</script>

<div class="control-row-wide">
  <Options {options} {selected} on:change={changeSelected} />
  <TextInput bind:value={chartName} placeholder="Enter Chart Name" width=120 />
  <Button color="orangered" icon="cogs" text="generate" on:click={generateChart} />
  <Button color="orangered" icon="angle-double-down" text="download" on:click={downloadChart} />
</div>

<style>
  .control-row-wide {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
  }
</style>