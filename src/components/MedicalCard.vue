<script>
export default {
  name: "MedicalCard",
  data() {
    return {

    };
  },
  props: ['medical']
};

</script>

<template>
  <div class="cardStyle">
    <div class="flex justify-center p-2">
      <img :src="medical.image" alt="" srcset="" class="h-36" />
    </div>
    <h2 class="text-xl font-bold">{{ medical.name }}</h2>
    <div>
      <i class="fa-solid fa-location-dot text-primary pr-1"></i>
      <span> {{ medical.address }} </span>
    </div>
    <div class="">
      <i class="fa-solid fa-phone text-primary"></i>
      <span> {{ medical.phone }}</span>
    </div>
    <div class="btnStyle">
      <span> {{ medical.status }}</span>
      <i class="fa-solid fa-circle-check pl-2 text-green-600"></i>
    </div>
  </div>
</template>