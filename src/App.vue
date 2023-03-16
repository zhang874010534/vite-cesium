<template>
  <div id="cesiumContainer">
  </div>
</template>

<script setup>
import * as cesium from "cesium";
import {onMounted} from "vue";

onMounted(() => {
  const custom = new cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
  const viewer = new cesium.Viewer('cesiumContainer', {
    // baseLayerPicker: false, // 右上角图块
    imageryProvider: custom, // 可视化图像数据
  })

})
</script>
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
