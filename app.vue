<template>
  <div class="wrapper">
    <header>
        <h1 class="font-mono p-10 text-lg"><a href="/">Check Your Request</a></h1>
    </header>
    <main>
        <NuxtPage/>
    </main>
    <footer class="text-sm text-center font-roboto text-[#6c7b93] leading-7 px-4">
        Made by
        <a href="https://www.linkedin.com/in/yurii-poliakov-651388127" target="blank">Yurii Poliakov</a>
    </footer>
  </div>
</template>

<style>
    .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
        margin-bottom: 10px;
    }
</style>

