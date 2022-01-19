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
        <b-col>
          <b-table-simple>
            <b-thead>
              <b-tr>
                <b-th>Index</b-th>
                <b-th>Name</b-th>
                <b-th>Points</b-th>
                <b-th>Nacionality</b-th>
              </b-tr>
              <b-tr v-for="(user, index) in getUsers" :key="index">
                <b-td v-if="user.type != 'admin'">{{index}}</b-td>
                <b-td v-if="user.type != 'admin'">{{user.username}}</b-td>
                <b-td v-if="user.type != 'admin'">{{user.points}}</b-td>
                <b-td v-if="user.type != 'admin'">
                  <lang-flag :iso='user.location'/>
                  <!-- {{user.location}} -->
                </b-td>
              </b-tr>
            </b-thead>
          </b-table-simple>
          </b-col>
        <b-col></b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

export default {
  
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>

<style>
</style>