import axios from 'axios';
import { ref, useSSRContext } from 'vue';

export default function useUsers() {
    const users = ref([])
    const errors = ref('')

    //async function to get users
    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data
    }

    //Create user
    const storeUser = async (data) => {
        errors.value = ''
        try {
            const {data:response} = await axios.post('/api/users', data)
            console.log(response.data.id)
            
            window.location = '/edit/' + response.data.id
            await window.location
            
        } catch (e) {
            if (e.response.status === 422) {
                console.log(e.response.data)
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    //Update user
    const updateUser = async (id, data) => {
        errors.value = ''
        try {
            const {data:response} = await axios.patch('/api/users/' + id, data)

            alert("success")
        } catch (e) {
            if (e.response.status === 422) {
                console.log(e.response.data)
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    //destroy user
    const destroyUser = async (id) => {
        await axios.delete('/api/users/' + id)
    }

    return{
        errors,
        users,
        storeUser,
        updateUser,
        getUsers,
        destroyUser
    }
}