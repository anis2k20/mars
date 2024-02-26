<script setup>
import marslogo from "@/assets/images/mars-logo.png";
import user from "@/assets/images/user.png";
</script>

<template>
    <nav
      class="w-80 bg-white text-primary h-screen hidden sm:block sm:sticky sm:top-0 overflow-scroll no-scrollbar px-3 border-r border-r-stockColor"
    >
      <div class="sticky top-0 pt-4">
        <div
          class="p-2 w-full flex justify-start outline-none gap-2 items-center pb-6 bg-white"
        >
          <div>
            <img :src="marslogo" alt="" class="w-24" />
          </div>
          <!-- <h2 class="text-xl font-bold">MARS</h2> -->
        </div>
        <!-- user -->
        <a href="#">
          <div class="flex items-center bg-white text-primar gap-3 p-2">
            <img :src="user" alt="user-photo" class="rounded-full w-14 border border-icon-color"
            />

            <h3 class="text-xl font-medium block">
              Account Holder<br />
              <span class="text-icon-color text-sm">Premium Member</span>
            </h3>
          </div>
        </a>
      </div>

      <hr class="border-b border-b-stockColor py-2 border-0" />

      <div class="navStyle text-lightBlue border-l-4 border-l-lightBlue">
        <i class="fa-solid fa-hospital"></i>
        <span class="nav-item text-lightBlue">Halthcares</span>
      </div>
      <div class="navStyle">
        <i
          class="fa-solid fa-user-doctor text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">Doctors</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-clock text-icon-color hover:text-lightBlue"></i>
        <span class="nav-item">Dr. Appoointments</span>
      </div>
      <div class="navStyle">
        <i
          class="fa-regular fa-calendar-days text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">Test Appoointments</span>
      </div>

      <div class="navStyle">
        <i
          class="fa-brands fa-wpforms text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">My Prescriptions</span>
      </div>
      <div class="navStyle">
        <i
          class="fa-solid fa-file-medical text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">My Reports</span>
      </div>

      <hr class="border-b-stockolor border-b py-2 outline-none border-0" />

      <div class="navStyle">
        <i class="fa-solid fa-bell text-icon-color hover:text-lightBlue"></i>
        <span class="nav-item">Notifications</span>
      </div>
      <div class="navStyle">
        <i
          class="fa-solid fa-address-card text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">Card</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-crown text-icon-color hover:text-lightBlue"></i>
        <span class="nav-item">Plans</span>
      </div>
      <div class="navStyle">
        <i class="fa-solid fa-gear text-icon-color hover:text-lightBlue"></i>
        <span class="nav-item">Settings</span>
      </div>

      <div class="navStyle mt-10">
        <i
          class="fa-solid fa-arrow-right-from-bracket text-icon-color hover:text-lightBlue"
        ></i>
        <span class="nav-item">Logout</span>
      </div>
    </nav>
</template>