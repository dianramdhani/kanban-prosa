<template>
  <div>
    <draggable
      v-model="myArray"
      @start="drag = true"
      @end="drag = false"
      item-key="issue_id"
    >
      <template #item="{ element }">
        <Task
          :name="element.name"
          :title="element.title"
          :assignee="element.assignee"
          :start_date="element.start_date"
          :end_date="element.end_date"
          :tags="element.tags"
        />
      </template>
    </draggable>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      drag: false,
      myArray: [
        {
          issue_id: 1,
          name: "dian",
          title: "String",
          assignee: "String",
          start_date: new Date("07-09-2021 11:50"),
          end_date: new Date("07-09-2021 11:50"),
          tags: "String",
        },
        {
          issue_id: 2,
          title: "String",
          assignee: "String",
          start_date: new Date("07-09-2021 11:50"),
          end_date: new Date("07-09-2021 11:50"),
          tags: "String",
        },
      ],
    };
  },
};
</script>