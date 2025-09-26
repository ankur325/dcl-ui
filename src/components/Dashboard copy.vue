<template>
    <div class="dashboard-container">
      <div class="chart-row">
        <div class="chart-container">
          <h3>Device Models by Manufacturer</h3>
          <canvas ref="manufacturerChart"></canvas>
          <div v-if="isLoading" class="loading-indicator">Loading...</div>
        </div>
        <div class="chart-container">
          <h3>Device Models by Type</h3>
          <canvas ref="deviceTypeChart"></canvas>
          <div v-if="isLoading" class="loading-indicator">Loading...</div>
        </div>
      </div>
      <div class="chart-row">
        <div class="chart-container">
          <h3>Compliance Status Distribution</h3>
          <canvas ref="complianceStatusChart"></canvas>
          <div v-if="isLoading" class="loading-indicator">Loading...</div>
        </div>
        <div class="chart-container">
          <h3>Compliance by Device Type</h3>
          <canvas ref="complianceByTypeChart"></canvas>
          <div v-if="isLoading" class="loading-indicator">Loading...</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Make sure to install Chart.js: npm install chart.js
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'DashboardCharts',
    
    data() {
      return {
        isLoading: true,
        charts: {
          manufacturer: null,
          deviceType: null,
          complianceStatus: null,
          complianceByType: null
        },
        
        // For demonstration - replace with actual data from your store
        useSampleData: true,
        
        sampleDeviceModels: [
          { vid: 4161, pid: 1, deviceTypeId: 0x0100, productName: "Smart Light A" },
          { vid: 4161, pid: 2, deviceTypeId: 0x0101, productName: "Smart Light B" },
          { vid: 1122, pid: 1, deviceTypeId: 0x0301, productName: "Thermostat X" },
          { vid: 1122, pid: 2, deviceTypeId: 0x0301, productName: "Thermostat Y" },
          { vid: 2233, pid: 1, deviceTypeId: 0x0022, productName: "Speaker Model S" },
          { vid: 3344, pid: 1, deviceTypeId: 0x0840, productName: "Control Hub" },
          { vid: 3344, pid: 2, deviceTypeId: 0x0840, productName: "Control Hub Pro" },
          { vid: 4455, pid: 1, deviceTypeId: 0x0107, productName: "Motion Sensor" },
          { vid: 5566, pid: 1, deviceTypeId: 0x000A, productName: "Smart Lock" },
        ],
        
        sampleComplianceData: [
          { vid: 4161, pid: 1, softwareVersionCertificationStatus: 2 }, // Certified
          { vid: 4161, pid: 2, softwareVersionCertificationStatus: 2 }, // Certified
          { vid: 1122, pid: 1, softwareVersionCertificationStatus: 1 }, // Provisional
          { vid: 1122, pid: 2, softwareVersionCertificationStatus: 3 }, // Revoked
          { vid: 2233, pid: 1, softwareVersionCertificationStatus: 2 }, // Certified
          { vid: 3344, pid: 1, softwareVersionCertificationStatus: 2 }, // Certified
          { vid: 3344, pid: 2, softwareVersionCertificationStatus: 1 }, // Provisional
          { vid: 4455, pid: 1, softwareVersionCertificationStatus: 2 }, // Certified
          { vid: 5566, pid: 1, softwareVersionCertificationStatus: 3 }, // Revoked
        ],
        
        // Mappings
        vendorMap: {
          1: 'Acme Smart Home',
          2: 'ConnectTech',
          3: 'SmartLiving',
          4: 'EcoSystems',
          4161: 'Panasonic',
          1122: 'Phillips',
          2233: 'Samsung',
          3344: 'Google',
          4455: 'Apple',
          5566: 'Amazon'
        },
        
        deviceTypeMap: {
          // Lighting
          0x0100: 'On/Off Light',
          0x0101: 'Dimmable Light',
          0x010C: 'Color Temperature Light',
          0x010D: 'Extended Color Light',
          // Smart plugs/Outlets
          0x010A: 'On/Off Plug-in Unit',
          0x010B: 'Dimmable Plug-In Unit',
          0x0303: 'Pump',
          // Switches and Controls
          0x0103: 'On/Off Light Switch',
          0x0104: 'Dimmer Switch',
          0x0105: 'Color Dimmer Switch',
          0x0840: 'Control Bridge',
          0x0304: 'Pump Controller',
          0x010D: 'Water Valve',
          0x000F: 'Generic Switch',
          // Sensors
          0x0015: 'Contact Sensor',
          0x0106: 'Light Sensor',
          0x0107: 'Occupancy Sensor',
          0x0302: 'Temperature Sensor',
          0x0305: 'Pressure Sensor',
          0x0306: 'Flow Sensor',
          0x0307: 'Humidity Sensor',
          0x0850: 'On/Off Sensor',
          0x0076: 'Smoke/CO Alarm',
          0x002C: 'Air Quality Sensor',
          0x0041: 'Water Freeze Detector',
          0x0043: 'Water Leak Detector',
          0x0044: 'Rain Sensor',
          // Closures
          0x000A: 'Door Lock',
          0x0202: 'Window Covering',
          0x000B: 'Door Lock Controller',
          0x0203: 'Window Covering Controller',
          // HVAC
          0x0300: 'Heating/Cooling Unit',
          0x0301: 'Thermostat',
          0x002B: 'Fan',
          0x002D: 'Air Purifier',
          // Media
          0x0028: 'Basic Video Player',
          0x0023: 'Casting Video Player',
          0x0022: 'Speaker',
          0x0024: 'Content App',
          0x0029: 'Casting Video Client',
          0x002A: 'Video Remote Control',
          // Appliances
          0x0070: 'Refrigerator',
          0x0071: 'Temperature Controlled Cabinet',
          0x0072: 'Room Air Conditioner',
          0x0073: 'Laundry Washer',
          0x0075: 'Dishwasher',
          // Robots
          0x0074: 'Robotic Vacuum Cleaner',
          // Aggregator
          0x000E: 'Aggregator',
          // Energy
          0x050C: 'EVSE'
        },
        
        complianceStatusMap: {
          1: 'Provisional',
          2: 'Certified',
          3: 'Revoked'
        },
        
        // Chart colors
        colors: {
          manufacturers: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#7CFC00', '#8A2BE2', '#00FFFF', '#FF7F50'
          ],
          deviceTypes: [
            '#4BC0C0', '#FFCE56', '#36A2EB', '#FF6384', '#9966FF',
            '#FF9F40', '#7CFC00', '#8A2BE2', '#00FFFF', '#FF7F50'
          ],
          complianceStatus: {
            'Provisional': '#FFCE56', // Yellow for provisional
            'Certified': '#4BC0C0',   // Green for certified
            'Revoked': '#FF6384'      // Red for revoked
          }
        }
      };
    },
    
    computed: {
      deviceModels() {
            console.log('Fetching device models');
            console.log(this.$store.getters['zigbeealliance.distributedcomplianceledger.model/getModelAll']());
          return this.$store.getters['zigbeealliance.distributedcomplianceledger.model/getModelAll']();
      },
      
      complianceData() {
          return this.$store.getters['zigbeealliance.distributedcomplianceledger.compliance/getComplianceInfoAll']();
      }
    },
    
    mounted() {
      // We add a slight delay to ensure the DOM is fully rendered
      setTimeout(() => {
        this.initializeCharts();
      }, 500);
    },
    
    methods: {
      initializeCharts() {
        this.renderManufacturerChart();
        this.renderDeviceTypeChart();
        this.renderComplianceStatusChart();
        this.renderComplianceByTypeChart();
        this.isLoading = false;
      },
      
      // Render manufacturer chart
      renderManufacturerChart() {
        // Group models by manufacturer (vid)
        const manufacturerCounts = {};
        this.deviceModels.model.forEach(model => {
          const vid = model.vid;
          manufacturerCounts[vid] = (manufacturerCounts[vid] || 0) + 1;
        });
        
        // Sort by count and take top 10
        const sortedVids = Object.keys(manufacturerCounts)
          .sort((a, b) => manufacturerCounts[b] - manufacturerCounts[a])
          .slice(0, 10);
        
        const labels = sortedVids.map(vid => this.vendorMap[vid] || `Vendor ${vid}`);
        const data = sortedVids.map(vid => manufacturerCounts[vid]);
        
        // Create the chart
        const ctx = this.$refs.manufacturerChart.getContext('2d');
        this.charts.manufacturer = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Number of Models',
              data: data,
              backgroundColor: this.colors.manufacturers.slice(0, labels.length),
              borderColor: 'rgba(255, 255, 255, 0.7)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0
                }
              }
            }
          }
        });
      },
      
      // Render device type chart
      renderDeviceTypeChart() {
        // Group models by device type
        const deviceTypeCounts = {};
        this.deviceModels.model.forEach(model => {
          const typeId = model.deviceTypeId;
          deviceTypeCounts[typeId] = (deviceTypeCounts[typeId] || 0) + 1;
        });
        
        // Sort by count and take top 10
        const sortedTypeIds = Object.keys(deviceTypeCounts)
          .sort((a, b) => deviceTypeCounts[b] - deviceTypeCounts[a])
          .slice(0, 10);
        
        const labels = sortedTypeIds.map(typeId => 
          this.deviceTypeMap[typeId] || `Device Type 0x${Number(typeId).toString(16).toUpperCase()}`);
        const data = sortedTypeIds.map(typeId => deviceTypeCounts[typeId]);
        
        // Create the chart
        const ctx = this.$refs.deviceTypeChart.getContext('2d');
        this.charts.deviceType = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: this.colors.deviceTypes.slice(0, labels.length),
              borderColor: 'rgba(255, 255, 255, 0.7)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 15
                }
              }
            }
          }
        });
      },
      
      // Render compliance status chart
      renderComplianceStatusChart() {
        // Count compliance statuses
        const statusCounts = {
          1: 0, // Provisional
          2: 0, // Certified
          3: 0  // Revoked
        };
        console.log(this.complianceData)
        this.complianceData.complianceInfo.forEach(item => {
          const status = item.softwareVersionCertificationStatus;
          if (status in statusCounts) {
            statusCounts[status]++;
          }
        });
        
        // Prepare data for chart
        const labels = Object.keys(statusCounts).map(status => this.complianceStatusMap[status]);
        const data = Object.values(statusCounts);
        const backgroundColors = labels.map(label => this.colors.complianceStatus[label]);
        
        // Create the chart
        const ctx = this.$refs.complianceStatusChart.getContext('2d');
        this.charts.complianceStatus = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: backgroundColors,
              borderColor: 'rgba(255, 255, 255, 0.7)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 15
                }
              }
            }
          }
        });
      },
      
      // Render compliance by device type chart
      renderComplianceByTypeChart() {
        // Create a map from vid+pid to deviceTypeId for easy lookup
        const deviceModelTypeMap = {};
        this.deviceModels.model.forEach(model => {
          const key = `${model.vid}-${model.pid}`;
          deviceModelTypeMap[key] = model.deviceTypeId;
        });
        
        // Group compliance data by device type and status
        const complianceByType = {};
        
        this.complianceData.complianceInfo.forEach(item => {
          const key = `${item.vid}-${item.pid}`;
          const deviceTypeId = deviceModelTypeMap[key];
          
          // Skip if we can't find the device type
          if (!deviceTypeId) return;
          
          // Initialize nested object if needed
          if (!complianceByType[deviceTypeId]) {
            complianceByType[deviceTypeId] = {
              1: 0, // Provisional
              2: 0, // Certified
              3: 0  // Revoked
            };
          }
          
          // Increment the appropriate status counter
          const status = item.softwareVersionCertificationStatus;
          if (status in complianceByType[deviceTypeId]) {
            complianceByType[deviceTypeId][status]++;
          }
        });
        
        // Take only device types with at least one non-zero status count
        const relevantDeviceTypes = Object.keys(complianceByType).filter(typeId => 
          complianceByType[typeId][1] > 0 || 
          complianceByType[typeId][2] > 0 || 
          complianceByType[typeId][3] > 0
        );
        
        // Sort by total number of devices per type
        relevantDeviceTypes.sort((a, b) => {
          const totalA = complianceByType[a][1] + complianceByType[a][2] + complianceByType[a][3];
          const totalB = complianceByType[b][1] + complianceByType[b][2] + complianceByType[b][3];
          return totalB - totalA;
        });
        
        // Limit to top 10 for readability
        const topDeviceTypes = relevantDeviceTypes.slice(0, 10);
        
        // Prepare data for the chart
        const deviceTypeLabels = topDeviceTypes.map(typeId => 
          this.deviceTypeMap[typeId] || `Device Type 0x${Number(typeId).toString(16).toUpperCase()}`);
        
        const datasets = [1, 2, 3].map(status => {
          return {
            label: this.complianceStatusMap[status],
            data: topDeviceTypes.map(typeId => complianceByType[typeId][status]),
            backgroundColor: this.colors.complianceStatus[this.complianceStatusMap[status]],
            borderColor: 'rgba(255, 255, 255, 0.7)',
            borderWidth: 1
          };
        });
        
        // Create the chart
        const ctx = this.$refs.complianceByTypeChart.getContext('2d');
        this.charts.complianceByType = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: deviceTypeLabels,
            datasets: datasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true
              },
              y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                  precision: 0
                }
              }
            }
          }
        });
      }
    },
    
    beforeDestroy() {
      // Clean up charts when component is destroyed
      Object.values(this.charts).forEach(chart => {
        if (chart) chart.destroy();
      });
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    width: 100%;
    padding: 20px;
  }
  
  .chart-row {
    display: flex;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  
  .chart-container {
    flex: 1;
    min-width: 300px;
    min-height: 350px;
    margin: 10px;
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 500;
    color: #333;
    text-align: center;
  }
  
  canvas {
    width: 100% !important;
    height: 300px !important;
  }
  
  .loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: italic;
    color: #666;
  }
  </style>