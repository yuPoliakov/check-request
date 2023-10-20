<template>
  <div>
      <div class="flex justify-center mt-10 mb-10">
        <h1 class="font-semibold leading-6 text-gray-900">Check Request</h1>
      </div>
      <div class="mt-20">
        <div class="flex justify-center mt-10 mb-10">
          <span>Send your request to</span>
          <span class="ml-2 font-semibold"> {{ url.protocol }}//{{ url.host }}{{ $router.resolve(`api/${$route.params.id}`).href }}</span>
        </div>
        <div class="flex justify-left mt-10 mb-10">
          <ObjectVisualizer :data="request" rootName="Your Request Data"></ObjectVisualizer>
        </div>
      </div>

  </div>
</template>

<script setup>
  import { ObjectVisualizer } from 'object-visualizer'
  import 'object-visualizer/dist/index.min.css'
  const { $socket } = useNuxtApp()
  const route = useRoute()
  const message = ref('')
  const request = reactive({
    headers: '',
    rawBody: '',
    params: ''
  })
  const url = useRequestURL()

  onMounted(() => {
    $socket.emitWithAck('register', route.params.id)

    $socket.on('custom', (data) => {
      request.headers = data.headers
      request.rawBody = data.rawBody
      request.params = data.params
    })
  })
</script>
