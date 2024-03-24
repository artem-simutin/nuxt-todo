<script setup lang="ts">
import AWSLogo from "assets/svg/aws-logo.svg";
import { buttonVariants } from "@/components/ui/button";
</script>

<template>
  <footer class="w-full flex items-center justify-between">
    <div class="flex items-center gap-x-2 text-primary font-light text-sm">
      <p>Powered by</p>
      <NuxtLink
        href="https://aws.amazon.com/"
        target="_blank"
        :class="
          cn(
            buttonVariants({
              variant: 'outline',
            }),
            'flex items-center gap-x-2 border rounded-md py-0.5 px-2',
          )
        "
      >
        <AWSLogo class="w-5 h-5" :font-controlled="false" />
        <p class="font-medium">Amazon Web Services</p>
      </NuxtLink>
    </div>
    <div class="font-light flex items-center gap-x-2 text-sm">
      <p>Build by</p>
      <NuxtLink
        href="https://github.com/artem-simutin"
        target="_blank"
        :class="
          (buttonVariants({
            variant: 'link',
          }),
          'font-medium p-0 h-auto')
        "
        >@artemsimutin</NuxtLink
      >
    </div>
  </footer>
</template>
