<template>
  <div>
      <div class="mt-20">
        <div class="flex justify-center font-mono mb-10">
          <div class="w-1/2">
            This website will help you to analyze your request and see details of it.
            After clicking the Start button you will be redirected to the page with an endpoint.
            A URL will be generated to which you can send your requests and observe details.
            The details include headers, body, and parameters.
          </div>
        </div>
        <div class="flex justify-center font-mono">
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
