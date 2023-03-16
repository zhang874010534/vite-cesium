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
    baseLayerPicker: false, // 右上角图块
    imageryProvider: custom, // 可视化图像数据
    terrainProvider:  cesium.createWorldTerrain({
      requestWaterMask: true, // 水的效果
      requestVertexNormals: true
    }), // 地形
  })
  // 摄像机 就是一开始的地方设置
  viewer.camera.setView({
    destination: cesium.Cartesian3.fromDegrees(113.318977, 23.114155, 200), // 经纬度高度
    // 观看角度
    orientation: {
      // heading: 1,
      heading: cesium.Math.toRadians(0),
      pitch: cesium.Math.toRadians(-90.0),
    }
  })
})
</script>
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
