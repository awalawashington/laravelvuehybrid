<template>
  <div>
    
    <form @submit.prevent="saveUser">
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Name</label>
        <input v-model="form.name" type="address" class="form-control" id="exampleInputName1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import useUsers from "../composables/users.js";
export default {
    props: {
        user: {
            required: true,
            type: Object
        }
    },
    setup(props){
        const form = reactive({
            name: props.user.name,
            email: props.user.email,
        })

        const { errors, updateUser} = useUsers()

        const saveUser = async () => {
            await updateUser(props.user.id, { ...form })
        }

        return {
            form,
            errors,
            saveUser
        }
    }
}

</script>

<style>

</style>