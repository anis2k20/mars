<script setup>
// Medical card
import MedicalCard from "@/components/MedicalCard.vue";
import medinova from "@/assets/images/medinova.jpg";
import evercare from "@/assets/images/evercare.png";
import samorita from "@/assets/images/somorita.png";
import medix from "@/assets/images/medix.png";
import popular from "@/assets/images/popular.jfif";
import york from "@/assets/images/york.png";

// Topnav
import TopNav from "@/components/TopNav.vue";
// Desktop sidebar
import DesktopSidebar from "@/components/DesktopSidebar.vue";
// Mobile sidebar
import MobileSidebar from "@/components/MobileSidebar.vue";
import {ref} from "vue";

// Filter
import Filter from "@/components/Filter.vue";

// Doctor profile
import DoctorProfile from "@/components/DoctorProfile.vue";
import fdoctor from "@/assets/images/female-doctor.png";
import fdoctor1 from "@/assets/images/female-doctor-1.png"
import fdoctor2 from "@/assets/images/female-doctor-2.png"
import mdoctor from "@/assets/images/male-doctor.png"
import mdoctor1 from "@/assets/images/male-doctor-1.png"
import mdoctor2 from "@/assets/images/male-doctor-2.png"



let doctors = [
  {
    name: 'Dr. Major Kazi Suriya Begum Rtd.',
    specialist: 'Gynecologist, Surgery',
    image: fdoctor,
  },
  {
    name: 'Dr. Shamima Chowdhory',
    specialist: 'Gynecologist',
    image: fdoctor1,
  },
  {
    name: 'Dr. Rehana Begum',
    specialist: 'Gynecologist',
    image: fdoctor2,
  },
  {
    name: 'Dr. Shamim Usman',
    specialist: 'Surgery',
    image: mdoctor,
  },
  {
    name: 'Dr. Shrabon Chowdhory',
    specialist: 'Sergery',
    image: mdoctor1,
  },
  {
    name: 'Dr. Shamima Chowdhory',
    specialist: 'Surgery',
    image: mdoctor2,
  },
];

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


const sidebar = ref(null);

</script>

<template>
  <div class="flex">
    <!-- left side navbar -->
    <DesktopSidebar></DesktopSidebar>
    <!-- end left side navbar -->

    <!-- content and top nav -->
    <div class="flex-1">
      <!-- TOP NAV -->
      <TopNav @toggled="sidebar.toggle()"></TopNav>
      <!-- END TOPNAV -->

      <!-- CONTENT DISPLAY -->
      <main class="text-center w-full flex flex-col">
        <div class="container bg-white p-4 flex flex-wrap mx-auto gap-6 justify-evenly">
          <!-- card -->
          <MedicalCard :medical="medical" v-for="medical in medicals" :key="medical"></MedicalCard>
          
          <Filter></Filter>

          <DoctorProfile :doctor="doctor" v-for="doctor in doctors"></DoctorProfile>
          <!-- end card -->
        </div>
      </main>
      <!-- end content display -->
    </div>
    <!-- end content and side nav -->
  </div>

  <!-- Mobile sitebar -->
  <MobileSidebar ref="sidebar"></MobileSidebar>
  <!-- end mobile sitebar -->

</template>
