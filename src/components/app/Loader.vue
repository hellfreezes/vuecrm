<template>
  <div class="app-loader"> <!-- делает по центру -->
    <div class="preloader-wrapper active"> <!-- Взято с сайта материалайза -->
      <div class="spinner-layer" :class="color">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    // Свойство вернет случайный элемент массива. От 1 до 3
    // и подставит его в шаблон в месте вызова
    color() {
      const colors = ["spinner-red-only", "spinner-blue-only", "spinner-green-only"];
      return colors[Math.floor(Math.random() * 3)];
    }
  }
}
</script>
