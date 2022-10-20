<template>
  <figure class="highcharts-figure">
    <div id="container"></div>
  </figure>
  <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
</template>

<script>
import Highcharts from "highcharts";

export default {
  name:'pieChart',
  mounted() {
    this.displayHighCharts();
  },
  methods: {
    displayHighCharts() {
      Highcharts.chart("container", {
        chart: {
          type: "column"
        },
        title: {
          text: "Browser market shares."
        },
        subtitle: {
          text: "Click the columns to view versions."
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          title: {
            text: "Total percent market share"
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}%"
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [
          {
            name: "Browsers",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 62.74,
                drilldown: "Chrome"
              },
              {
                name: "Firefox",
                y: 10.57,
                drilldown: "Firefox"
              },
              {
                name: "Internet Explorer",
                y: 7.23,
                drilldown: "Internet Explorer"
              },
              {
                name: "Safari",
                y: 5.58,
                drilldown: "Safari"
              },
              {
                name: "Edge",
                y: 4.02,
                drilldown: "Edge"
              },
              {
                name: "Opera",
                y: 1.92,
                drilldown: "Opera"
              },
              {
                name: "Other",
                y: 7.62,
                drilldown: null
              }
            ]
          }
        ],
      });
    }
  }
};
</script>
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>