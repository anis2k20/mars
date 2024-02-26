<script setup>
import marslogo from "@/assets/images/mars-logo.png";
import user from "@/assets/images/user.png";

const emit = defineEmits(
    ['toggled']
);

function toggle(){
    emit('toggled')
}
</script>

<template>
    <header
        class="w-full sticky top-0 bg-white border-b border-b-stockColor border-0">
        <div class="w-full flex justify-around items-center py-3">
          <button
            type="button"
            id="taggle_button"
            class="sm:hidden outline-none"
            @click="toggle"
          >
            <i class="fa-solid fa-bars text-primary text-2xl"></i>
          </button>
          <div class="sm:hidden">
            <img :src="marslogo" alt="" srcset="" class="w-28"/>
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
                :src="user"
                alt=""
                class="rounded-full w-10 border"
              />
            </div>
          </a>
        </div>
      </header>
</template>