<script setup lang="ts">
import { ref } from "vue";
import { type Task } from "@/types/task";

const tasks = ref<Task[]>([
  {
    id: "init",
    task: "Testing rendering",
    completed: false,
  },
]);

const createTask = (task: Task) => {
  tasks.value = [...tasks.value, task];
};

const deleteTask = (id: string) => {
  tasks.value = tasks.value.filter((i) => i.id !== id);
};

const toggleCompleteTask = (id: string) => {
  const index = tasks.value.findIndex((i) => i.id === id);
  if (index < 0) return;
  const item = tasks.value[index];
  tasks.value[index] = {
    ...item,
    completed: !item.completed,
  };
};
</script>

<template>
  <section class="w-full flex flex-col gap-y-2 items-center max-w-[50vw]">
    <TaskInput @create="createTask" />
    <div class="w-full flex flex-col gap-y-1">
      <TaskCard
        v-for="task in tasks"
        :id="task.id"
        :key="task.task"
        :task="task.task"
        :completed="task.completed"
        @delete="deleteTask(task.id)"
        @toggle-completion="toggleCompleteTask(task.id)"
      />
    </div>
  </section>
</template>
