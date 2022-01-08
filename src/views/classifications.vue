<template>
  <div>
    <b-row>
      <b-col>
        <h1>Classifications</h1>
      </b-col>
      <b-col>
        <b-dropdown
          id="dropdown-right"
          right
          text="Filter"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item href="#">Worldwide</b-dropdown-item>
          <b-dropdown-item href="#">National</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <div>
        <b-col></b-col>
        <b-col
          ><b-table small :fields="fields" :items="items" responsive="sm">
            <!-- A virtual column -->
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>

            <!-- A custom formatted column -->
            <template #cell(name)="data">
              <b v-html="data.value.html"></b>
              <b class="text-info"
                ><a href="">{{ data.value.username }}</a></b
              >
            </template>

            <!-- A virtual composite column -->
            <template #cell(nationality)="data">
              {{ data.item.nationality }}
            </template>

            <!-- Optional default data cell scoped slot -->
            <template #cell(points)="data">
              <i>{{ data.item.points }}</i>
            </template>
          </b-table></b-col
        >
        <b-col></b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        "index",
        // A column that needs custom formatting
        "name",
        // A regular column
        "points",
        // A regular column
        "nationality",
      ],
      items: [
        {
          name: {
            html: `<img src='.../assets/Analista de sistemas (1).png'/>`,
            username: "Armando_MorningStar",
          },
          nationality: "Portuguese",
          points: "1000pts",
        },
        {
          name: {
            html: `<img src='.../assets/Analista de sistemas (1).png'/>`,
            username: "Armando_MorningStar",
          },
          nationality: "Portuguese",
          points: "1000pts",
        },
        {
          name: {
            html: `<img src='.../assets/Analista de sistemas (1).png'/>`,
            username: "Armando_MorningStar",
          },
          nationality: "Portuguese",
          points: "1000pts",
        },
        {
          name: {
            html: `<img src='.../assets/Analista de sistemas (1).png'/>`,
            username: "Armando_MorningStar",
          },
          nationality: "Portuguese",
          points: "1000pts",
        },
      ],
    };
  },
};
</script>

<style>
</style>