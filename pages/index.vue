<template>
  <div class="w-screen min-h-svh p-6 flex flex-col gap-y-4">
    <Header />
    <main
      class="h-full w-full flex flex-1 items-center gap-y-12 justify-center flex-col"
    >
      <div class="flex flex-col items-center gap-y-2">
        <div
          class="border rounded-full pl-1 pr-3 py-1 shadow flex gap-x-2 items-center transition-shadow hover:shadow-xl cursor-default"
        >
          <div class="rounded-full bg-accent p-1 w-6 h-6 leading-none relative">
            <span class="absolute top-[5px]">🤔</span>
          </div>
          <p>Beautiful, innit?</p>
        </div>
        <h1 class="text-6xl font-bold text-center">
          What are you thinking about?
        </h1>
      </div>
      <Task />
    </main>
    <Footer />
  </div>
</template>
