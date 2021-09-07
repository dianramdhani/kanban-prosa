<template>
  <draggable
    v-model="myArray"
    group="people"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
  >
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Todo",
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      myArray: [
        {
          name: "dian",
        },
        {
          name: "ramdhani",
        },
      ],
    };
  },
};
</script>