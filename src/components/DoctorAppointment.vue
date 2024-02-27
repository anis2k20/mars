<script>

export default {
    name : 'DoctorAppointment',
    data() {
        return {
           
        };
    },
    props : ['info']
}

</script>

<template>
    <div class="border border-stockColor space-y-1 p-2 text-left px-8 py-4 rounded">
        <h3 class="text-lg font-medium">Doctor: {{ info.name }}</h3>
        <h4>Specialist: {{ info.specialist }}</h4>
        <h4>Time: {{ info.time }}</h4>
        <h4>Date: {{ info.date }}</h4>
        <p>Medical: {{ info.medical }}</p>
    </div>
</template>