<template>
  <div>
      <div class="mt-20 font-mono">
        <div class="flex flex justify-center mt-10 mb-5">
          <span>Send your request to</span>
          <span class="ml-2 font-semibold" ref="requestURL"> {{ url.protocol }}//{{ url.host }}{{ $router.resolve(`api/${$route.params.id}`).href }}</span>
        </div>
        <div class="flex flex justify-center mb-10 ml-2">
          <button class="border-b-2 border-black hover:bg-gray-100 hover:border-white" @click="copyURL">copy to clickboard</button>
          <span
            class="pointer-events-none relative left-10 w-max transition-opacity"
            :class="{ 'opacity-0': !isCopied, 'opacity-100': isCopied }"
          >copied!</span>
        </div>
        <div class="flex justify-left mt-10 mb-10 w-1/2 ml-72">
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
  const requestURL = ref('')
  const isCopied = ref(false)
  const request = reactive({
    headers: '',
    rawBody: '',
    params: ''
  })
  const url = useRequestURL()

  function copyURL(el) {
    copyTextToClipboard(requestURL.value.innerText)
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      return;
    }

    navigator.clipboard.writeText(text).then(function() {
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 1500);
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  onMounted(() => {
    $socket.emitWithAck('register', route.params.id)

    $socket.on('custom', (data) => {
      request.headers = data.headers
      request.rawBody = data.rawBody
      request.params = data.params
    })
  })
</script>
