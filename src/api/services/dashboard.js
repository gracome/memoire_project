import client from '@/api/client'
import { MY_PROFILE, ADD_USER, UPDATE_PROFILE } from '@/api/routes'
import { ALL_MESSAGES, CHANGE_PASSWORD, CONVERSATION_LISTES, DELETE_USER, UPDATE_USER } from '../routes'
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
export async function usersListe() {
    return client.get(USERS_LISTE)
}
export async function update_profile(data) {
    return client.put(UPDATE_PROFILE, data)
}
export async function change_password(data) {
    return client.post(CHANGE_PASSWORD, data)
}
export async function update_user(data) {
    return client.put(UPDATE_USER, data)
}
export async function delete_user(data) {
    return client.delete(DELETE_USER, {params: { id: data.id}})
}

export async function liste_conversation() {
    return client.get(CONVERSATION_LISTES )
}

export async function liste_messages(){
    return client.get(ALL_MESSAGES)
}