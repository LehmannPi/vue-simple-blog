<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 8px solid transparent;
  border-radius: 50%;
  border-top-color: #71231B;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>