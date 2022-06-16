import client from '@/api/client'
import { USER_LOGIN, PROFILE } from '@/api/routes'


export async function userLogin (data) {
    const response =  client.post(USER_LOGIN, data)
    return response
}