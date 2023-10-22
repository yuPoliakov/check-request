<template>
  <div>
      <div class="mt-20">
        <div class="mt-2 flex justify-center gap-x-3 font-mono">
          <div class="w-96">
            <span>After click Start button you will be redirected to your instance.
              An URL will be generated to which you could send your requests and observe details about it.
            </span>
          </div>
          <button
            @click="proceedToInstance"
            type="button"
            class="font-mono rounded-md px-2.5 py-1.5 text-sm text-black-900 shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 w-60 h-14"
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
