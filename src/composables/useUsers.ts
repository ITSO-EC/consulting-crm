import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useUsersStore } from '../stores/usersStore'

const BASE_API='https://itso.ga/v1/'
const useUsers = () => {
    const usersStore = useUsersStore();
    
    
    const {users, selectedUser,error, loading, results, page} = storeToRefs(usersStore);

    const initializeUsers = async () => {
        loading.value = true;
        usersStore.loadUsers(await axios.get(BASE_API+'users'));
        loading.value = false;
    }
    const selectUserById = (id: string) => usersStore.getUserById(id);

    const retrieveUserById = (id: string) => {
      const selectedUserx = users.value?.find((user) => user.id == id);
      return selectedUserx;
    }

    const createUser = async(payload) => {
        loading.value = true;
        axios.post(BASE_API+'users', payload)
        .then(response => {
        initializeUsers()
        loading.value = false
        })
        .catch(error => {
          loading.value = false    
          console.error("error en useUsers",error)  
        });
      };
  
    return {
        // Properties
        users,
        selectedUser,
        error,
        loading,
        results,
        page,

        //methods
        createUser,
        retrieveUserById,
        initializeUsers,
        selectUserById 

    }
}
export default useUsers;
