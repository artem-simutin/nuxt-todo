<script setup lang="ts">
import { Check } from "lucide-vue-next";
import { X } from "lucide-vue-next";
import { buttonVariants } from "../../components/ui/button";
import { type Task } from "@/types/task";

defineEmits(["delete", "toggleCompletion"]);
const props = defineProps<Task>();
</script>

<template>
  <div class="p-2 border rounded-md items-center gap-x-2 flex justify-between">
    <div class="flex gap-x-2 items-center">
      <Button
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-auto p-0.5 text-primary',
          )
        "
        @click="$emit('toggleCompletion')"
      >
        <Check class="w-4 h-4" :font-controlled="false" />
      </Button>
      <p class="truncate min-w-0">
        {{ props.task }}
      </p>
      <div
        v-if="props.completed"
        class="bg-green-100 text-green-700 py-0.5 px-1 rounded-sm uppercase leading-none text-sm"
      >
        Completed
      </div>
    </div>

    <Button variant="outline" class="p-0.5 h-auto" @click="$emit('delete')">
      <X class="w-4 h-4 text-destructive" :font-controlled="false" />
    </Button>
  </div>
</template>
