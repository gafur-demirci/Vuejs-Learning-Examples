<template>
  <div class="container">
    <div class="block" :class="{ animate: isAnimated }"></div>
    <button @click="animate">Animate</button>
  </div>
  <div class="container">
    <!-- Eğer aynı anda sadece 1 tane comp dom'da olursa çalışır
    aksi durumda transition comp kullanılamaz. -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!isUsersShow">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>

  </div>
  <div class="container">
    <!-- transition component enter-to-class="" gibi basic class'ları
    özel css class isimleri vererek de kullanılabilir, name ise multiple
    transition components olduğunda istenen comp'e istenen animation 
    verilmesi için isimlendirilerek birbirinden ayrılması sağlanır. -->
    <transition name="paragraph">
      <p v-if="isVisibleParagraph">Some times visible, some times unvisible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      isAnimated: false,
      isVisibleParagraph: false,
      dialogIsVisible: false,
      isUsersShow: false
    };
  },
  methods: {
    showUsers() {
      this.isUsersShow = true;
    },
    hideUsers() {
      this.isUsersShow = false;
    },
    animate() {
      this.isAnimated = true
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.isVisibleParagraph = !this.isVisibleParagraph;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* begin - element added dom */
/*
.paragraph-enter-from {
   opacity: 0;
  transform: translateY(-30px); 
}
*/
/* during - element inside dom */
.paragraph-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}

/* end - element moved dom */
/*
.paragraph-enter-to {
  opacity: 1;
  transform: translateY(0);
}
*/
/* begin - element remove dom start */
/*
.paragraph-leave-from {
  opacity: 1;
  transform: translateY(0);
}
*/
/* begin - element removing dom */
.paragraph-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}

/* begin - element remove dom end */
/*
.paragraph-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
*/
</style>