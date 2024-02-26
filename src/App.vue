<script setup>
import MedicalCard from "@/components/MedicalCard.vue";
import medinova from "@/assets/images/medinova.jpg";
import evercare from "@/assets/images/evercare.png";
import samorita from "@/assets/images/somorita.png";
import medix from "@/assets/images/medix.png";
import popular from "@/assets/images/popular.jfif";
import york from "@/assets/images/york.png";

let medicals = [
  {
    name: "Medinova Medical Services Ltd",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: medinova,
  },
  {
    name: "Evercare Hospital Lakki",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: evercare,
  },
  {
    name: "Samorita",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: samorita,
  },
  {
    name: "Medix",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: medix,
  },
  {
    name: "Popular Diagnostics Center Ltd.",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: popular,

  },
  {
    name: "Popular Diagnostics Center Ltd.",
    address: "House 71/A, Road 5/A, Dhanmondi R/A, Dhaka-1209",
    phone: " 01755-555555",
    status: "Availabe",
    image: york,

  },
];
</script>

<template>
  <div class="flex">
    <!-- left side navbar -->
    <nav
      class="w-80 bg-white text-primary h-screen hidden sm:block sm:sticky sm:top-0 overflow-scroll no-scrollbar px-3 border-r border-r-stockColor"
    >
      <div class="sticky top-0 pt-4">
        <div
          class="p-2 w-full flex justify-start outline-none gap-2 items-center pb-6 bg-white"
        >
          <div>
            <img src="./assets/images/mars-logo.png" alt="" class="w-24" />
          </div>
          <!-- <h2 class="text-xl font-bold">MARS</h2> -->
        </div>
        <!-- user -->
        <a href="#">
          <div class="flex items-center bg-white text-primar gap-3 p-2">
            <img
              src="./assets/images/user.PNG"
              alt=""
              class="rounded-full w-14 border border-icon-color"
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
    <!-- end left side navbar -->

    <!-- content and top nav -->
    <div class="flex-1">
      <!-- TOP NAV -->
      <header
        class="w-full sticky top-0 bg-white border-b border-b-stockColor border-0"
      >
        <div class="w-full flex justify-around items-center py-3">
          <button
            type="button"
            id="taggle_button"
            class="sm:hidden outline-none"
          >
            <i class="fa-solid fa-bars text-primary text-2xl"></i>
          </button>
          <div class="sm:hidden">
            <img
              src="./assets/images/mars-logo.png"
              alt=""
              srcset=""
              class="w-28"
            />
          </div>
          <!-- Search box -->
          <div class="hidden sm:block">
            <div
              class="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-primary/5"
            >
              <i class="fa-solid fa-magnifying-glass text-primary"></i>
              <input
                class="text-lg ml-4 w-96 bg-transparent outline-none"
                placeholder="Search healthcare"
              />
            </div>
          </div>

          <!-- user -->
          <a href="#" class="sm:hidden">
            <div class="">
              <img
                src="./assets/images/user.PNG"
                alt=""
                class="rounded-full w-10 border border-primary"
              />
            </div>
          </a>
        </div>
      </header>
      <!-- END TOPNAV -->

      <!-- CONTENT DISPLAY -->
      <main class="text-center w-full flex flex-col">
        <div
          class="container bg-white p-4 flex flex-wrap mx-auto gap-4 justify-evenly">
          <!-- card -->

          <MedicalCard :medical="medical" v-for="medical in medicals" :key="medical"></MedicalCard>

          <!-- end card -->
        </div>
      </main>
      <!-- end content display -->
    </div>
    <!-- end content and side nav -->
  </div>

  <!-- Mobile sitebar -->

  <nav
    class="sm:hidden fixed h-screen w-80 bg-white sidebar -left-96 duration-700 top-0 px-3 border-0 border-r border-r-stockColor"
    id="menu"
  >
    <div>
      <!-- <button type="button" id="close">close</button> -->

      <div class="sticky top-0">
        <div
          class="p-2 bg-white mt-2 flex items-center outline-none gap-2"
          id="close"
        >
          <img
            src="./assets/images/mars-logo-without-text.png"
            alt=""
            class="w-6"
          />
          <h2 class="text-2xt text-white font-bold">MARS</h2>
          <i
            class="fa-solid fa-xmark ml-32 text-red-600 bg-white drop-shadow-md rounded-full p-2 px-2.7 cursor-pointer"
          ></i>
        </div>

        <!-- user -->
        <a href="#">
          <div class="flex items-center bg-white text-primary gap-3 p-2">
            <img
              src="./assets/images/user.PNG"
              alt="user-photo"
              class="rounded-full w-14"
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
  <!-- end mobile sitebar -->

  <!-- internal js -->
  <!-- <script type="module" src="/main.js"></script>
  <script>
    new WOW().init();
  </script> -->
</template>
