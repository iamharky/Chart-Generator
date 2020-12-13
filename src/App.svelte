<script>
  import chartGenerator from './generators/chartGenerator';
  import Header from './components/atoms/Header.svelte';
  import AddedItems from './components/molecules/AddedItems.svelte';
  import AddItem from './components/organisms/AddItem.svelte';
  import Controls from './components/molecules/Controls.svelte';
  import ChartArea from './components/atoms/ChartArea.svelte';

  let data = [];
  let chartName = '';
  let chartType = 'bar';

  const removeItem = (item) => (data = data.filter(i => i !== item.detail));

  const addItem = (item) => (data = [...data, item.detail]);

  const changeType = (type) => (chartType = type.detail);
  
  const generate = () => chartGenerator(data, chartName, chartType);

</script>

<div id="app">
  <Header />
  <AddedItems on:removeItem={removeItem} {data} legend={chartName} />
  <AddItem on:addItem={addItem} />
  <Controls bind:chartName bind:selected={chartType} on:generateChart={generate} on:changeSelected={changeType} />
  <ChartArea />
</div>

<style>
  #app {
    display: block;
    width: 600px;
    margin: 0 auto;
    border: 0;
    padding: 8px;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 6px gray
  }
</style>