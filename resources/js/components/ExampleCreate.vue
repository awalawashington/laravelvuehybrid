<template>
    <div>
        <h1>Hello Create</h1>
        <div v-if="errors !== ''">
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                {{ errors }}
                </div>
            </div>
        </div>
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
            <div class="mb-3">
                <label for="exampleInputWebsite1" class="form-label">Password</label>
                <input v-model="form.password" type="text" class="form-control" id="exampleInputWebsite1">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import useUsers from "../composables/users.js";

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            password: ''
        })

        const { errors, storeUser } = useUsers()

        const saveUser = async () => {
            await storeUser({ ...form })
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