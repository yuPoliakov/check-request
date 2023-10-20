<template>
  <div>
      <div class="flex justify-center mt-10 mb-10">
        <h1 class="font-semibold leading-6 text-gray-900">Check Request</h1>
      </div>
      <div class="mt-20">
        <div class="mt-2 flex items-center gap-x-3">
          <button
            @click="proceedToInstance"
            type="button"
            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            START
          </button>
        </div>
      </div>
  </div>
</template>

<script setup>
async function proceedToInstance() {
  try {
    const response = await useFetch('/api/generateId', {
      method: 'POST'
    })

    await navigateTo(`/instance-${response.data.value.id}`)
  } catch (error) {
   console.log(error) 
  }
}
</script>
