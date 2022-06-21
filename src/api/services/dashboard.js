import client from '@/api/client'
import { MY_PROFILE, ADD_USER, UPDATE_PROFILE } from '@/api/routes'
import { CHANGE_PASSWORD } from '../routes'


export async function userLogin(data) {
    const response = client.post(USER_LOGIN, data)
    return response
}

export async function my_profile(user_id) {
    return client.get(MY_PROFILE, { params: { id: user_id } })

}


export async function add_user(data) {
    return client.post(ADD_USER, data)

}

export async function usersListe (data){
    return client.get(USERS_LISTE, data)
}

export async function update_profile(data){
    return client.put(UPDATE_PROFILE, data)
}
export async function change_password(data){
    return client.post(CHANGE_PASSWORD, data)
}