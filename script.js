const App = () => {
  const [chartType, setChartType] = React.useState('bar');
  const [chartName, setChartName] = React.useState('New Chart');
  const [label, setLabel] = React.useState();
  const [value, setValue] = React.useState();
  const [data, setData] = React.useState([]);

  let hex = ['8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  const generateColors = () => {
    let colors = [];
    let len = data.length;

    for (l = 0; l < len; l++) {
      let color = '#';
      let ln = 0;

      for (i = 0; i < 6; i++) {
        ln = Math.floor(Math.random() * 8);
        color += hex[ln];
      }

      colors.push(color);
    }

    return colors;
  };

  const newChart = () => {
    if (data !== []) {
      let oldCanvas = document.getElementById("chart");
      oldCanvas && oldCanvas.remove();
      let newCanvas = document.createElement('CANVAS');
      let labels = data.map(item => item.lbl);
      let values = data.map(item => item.val);
      let newBar = new Chart(newCanvas.getContext('2d'), {
        type: chartType,
        data: {
          labels: labels,
          datasets: [{
            label: chartName,
            data: values,
            backgroundColor: chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea' ? generateColors() : 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea' ? 0 : 1 }] },


        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true } }] } },



        events: ['mousemove', 'touchmove'] });

      newCanvas.setAttribute("id", "chart");
      document.getElementById('chart-area').appendChild(newCanvas);
    }
  };

  const addData = async () => {
    if (label && value) {
      await setData([
      ...data,
      { lbl: label, val: value }]);

      setLabel('');
      setValue('');
    }
  };

  const download = () => {
    var link = document.createElement('a');
    link.download = `${chartName}.png`;
    link.href = document.getElementById("chart").toDataURL();
    link.click();
  };

  const removeItem = async item => {
    let newData = data.filter(i => i !== item);
    await setData(newData);
  };

  return (
    React.createElement(React.Fragment, null,
    React.createElement("header", null, "Chart Generator"),
    React.createElement(AddedItems, { data: data, name: chartName, removeItem: removeItem }),

    React.createElement(AddingItem, { label: label, value: value, style: { visibility: label && 'visible' } }),

    React.createElement(ControlArea, { nFunc: e => setChartName(e.target.value),
      vFunc: e => setValue(e.target.value), lFunc: e => setLabel(e.target.value),
      label: label, value: value, addData: addData, newChart: newChart,
      download: download, chartType: chartType,
      setChartType: e => setChartType(e.target.value) }),

    React.createElement("div", { id: "chart-area" })));


};

const AddedItems = props => {
  const { data, name, removeItem } = props;
  return (
    React.createElement("fieldset", { id: "added-items" },
    React.createElement("legend", { id: "chart-name" }, name),
    data.map(item => React.createElement("span", { onClick: () => removeItem(item), className: "added-item" }, item.lbl, " : ", item.val))));


};

const AddingItem = props => {
  const { label, value, style } = props;
  return (
    React.createElement("p", { id: "new-item-container" },
    React.createElement("span", { style: style, id: "adding-item" }, label, " : ", value)));


};

const ControlArea = props => {
  const { nFunc, lFunc, vFunc, label, value, addData, newChart, download, chartType, setChartType } = props;
  return (
    React.createElement("div", { id: "input-area" },
    React.createElement("div", { className: "control-row" },
    React.createElement("input", { type: "text", placeholder: "Label",
      onChange: lFunc, value: label }),
    React.createElement("input", { type: "number", placeholder: "Value",
      onChange: vFunc, value: value }),
    React.createElement("button", { id: "add-btn", onClick: addData },
    React.createElement("i", { className: "fas fa-plus" }), " ADD")),

    React.createElement("div", { className: "control-row wide" },
    React.createElement("select", { value: chartType, onChange: setChartType },
    React.createElement("option", null, "bar"),
    React.createElement("option", null, "line"),
    React.createElement("option", null, "radar"),
    React.createElement("option", null, "pie"),
    React.createElement("option", null, "doughnut"),
    React.createElement("option", null, "polarArea")),

    React.createElement("input", { id: "chart-name-input", type: "text", placeholder: "Enter Chart Name",
      onChange: nFunc }),
    React.createElement("button", { id: "create-btn", onClick: newChart },
    React.createElement("i", { class: "fas fa-cogs" }), " GENERATE"),
    React.createElement("button", { id: "download-btn", onClick: download },
    React.createElement("i", { class: "fas fa-angle-double-down" }), " DOWNLOAD"))));



};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));