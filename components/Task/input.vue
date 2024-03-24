<script setup lang="ts">
import { SquareCheck } from "lucide-vue-next";
import { ref } from "vue";
import { cn } from "../../utils/index";
import Button from "../ui/button/Button.vue";
import { type Task } from "../../types/task";

const emit = defineEmits(["create"]);

const task = ref("");

const createTask = () => {
  const taskObj: Task = {
    id: new Date().getTime().toString(),
    task: task.value,
    completed: false,
  };
  task.value = "";
  emit("create", taskObj);
};
</script>

<template>
  <div
    class="border border-input p-2 rounded-md w-full flex gap-x-2 items-center ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <SquareCheck
      :class="cn('w-6 h-6 text-input', task.length > 0 && 'text-primary')"
      :font-controlled="false"
    />
    <input
      v-model="task"
      class="outline-none w-full bg-transparent"
      placeholder="What is your idea?"
      @keyup.enter="createTask"
    />
    <Button class="h-auto py-1 px-2" @click="createTask">Create</Button>
  </div>
</template>
