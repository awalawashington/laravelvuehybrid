<template>
    <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Created at</th>
          <th scope="col">Updated at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.email }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.updated_at }}</td>
          <td><button @click="deleteUser(item.id)" type="button" class="btn btn-danger btn-sm">Delete</button></td>
          <td><button @click="editUser(item.id)" type="button" class="btn btn-danger btn-sm">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';

import useUsers from "../composables/users.js";

export default {
    setup(){
        const {users, getUsers, destroyUser} = useUsers()

        onMounted(getUsers)

        const deleteUser = async (id) => {
            if (!window.confirm('Are you sure? you want to delete')) {
                return
            }
            await destroyUser(id)
            await getUsers()
        }

        const editUser = async (id) => {
            window.location = "/edit/"+id;
        }

        return{
            users,
            deleteUser,
            editUser
        }
    }
}
</script>

<style>

</style>