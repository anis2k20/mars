<script setup>
import marslogo from "@/assets/images/mars-logo-without-text.png";
import user from "@/assets/images/user.png";

import {ref} from "vue";
const isOpen = ref(false);

function toggle(){
    isOpen.value = !isOpen.value;
}

defineExpose({toggle})

</script>

<template>
      <nav
    class="sm:hidden fixed h-screen w-80 bg-white sidebar duration-700 top-0 px-3 border-0 border-r border-r-stockColor"
    id="menu" :class="{'left-0': isOpen,'-left-96':!isOpen}">
    <div>
      <!-- <button type="button" id="close">close</button> -->

      <div class="flex justify-between items-center pt-4">
        <!-- user -->
        <a href="#">
          <div class="flex items-center bg-white text-primary gap-3 p-2">
            <img :src="user" alt="user-photo" class="rounded-full w-14" />

            <h3 class="text-xl font-medium block">
              Account Holder<br />
              <span class="text-icon-color text-sm">Premium Member</span>
            </h3>
          </div>
        </a>
        <!-- close button -->
        <div class=" bg-white flex items-center outline-none" id="close" >
          <i class="fa-solid fa-xmark mr-2 text-red-600 bg-white drop-shadow-md rounded-full p-2 px-2.5 cursor-pointer"
          @click="toggle"></i>
        </div>
      </div>

      <hr class="border-b border-b-stockColor py-2 border-0" />

      <div class="navStyle text-lightBlue border-l-4 border-l-lightBlue">
        <i class="fa-solid fa-hospital text-lightBlue"></i>
        <span class="nav-item text-lightBlue">Halthcares</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-user-doctor text-icon-color"></i>
        <span class="nav-item">Doctors</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-clock text-icon-color"></i>
        <span class="nav-item">Dr. Appoointments</span>
      </div>
      <div class="navStyle">
        <i class="fa-regular fa-calendar-days text-icon-color"></i>
        <span class="nav-item">Test Appoointments</span>
      </div>
      <div class="navStyle">
        <i class="fa-brands fa-wpforms text-icon-color"></i>
        <span class="nav-item">My Prescriptions</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-file-medical text-icon-color"></i>
        <span class="nav-item">My Reports</span>
      </div>

      <hr class="border-b border-b-stockColor py-2 border-0" />

      <div class="navStyle">
        <i class="fa-solid fa-bell text-icon-color"></i>
        <span class="nav-item">Notifications</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-address-card text-icon-color"></i>
        <span class="nav-item">Card</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-crown text-icon-color"></i>
        <span class="nav-item">Plans</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-gear text-icon-color"></i>
        <span class="nav-item">Settings</span>
      </div>
    </div>
  </nav>
</template>