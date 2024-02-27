<script>

export default {
    name: "DoctorProfile",
    data(){
        return {

        };
    },
    props : ['doctor']
}

</script>

<template>    
    <!-- doctor card -->
    <div class="doctorCard">
    <div class="text-left w-44 sm:w-72">
        <h2 class="cardHeading">{{ doctor.name }}</h2>
        <h5>{{ doctor.specialist }}</h5>
        <div class="pt-12">
        <a href="#" class="border text-sm border-blue-950 text-blue-950 p-1.5 sm:px-4 rounded">
            Make Appointment
            </a>
        </div>
    </div>
    <div class="w-24 h-24 sm:w-28 sm:h-28">
        <img :src="doctor.image" alt="" class="rounded-full">
    </div>
    </div>
    <!-- end card -->
</template>