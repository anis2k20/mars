<script>

export default {
    data() {
        return {
            specialists : ["Gynecologist","Medicine","Surgery"],
            numberOfResults : [12,24,36],
        }
    }
}

</script>

<template>
    <div class="container  p-4 flex flex-wrap flex-row justify-between mx-auto border">
          <div class="p-2 flex flex-col">
            <input type="text" name="" id="" class="border rounded px-6 p-2 outline-none" placeholder="Search doctor">
          </div>
          <div class="p-2 ">
            <div class="p-2 border rounded px-14">
              <select name=" " id="">
                <option value="" selected class="">Specialists</option>
                <option value="" v-for="specialist in specialists">{{ specialist }}</option>
              </select>
            </div>
          </div>
          <div class="p-2 ">
            <div class="p-2 px-10 outline-none border rounded">
              <select name=" " id="">
                <option value="" selected>Doctors per page</option>
                <option value="" v-for="numberOfResult in numberOfResults"> {{ numberOfResult }}</option>
               
              </select>
            </div>
          </div>
        </div>
</template>