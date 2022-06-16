import client from '@/api/client'
import { MY_PROFILE } from '@/api/routes'


export async function userLogin (data) {
    const response =  client.post(USER_LOGIN, data)
    return response
}

export async function my_profile (user_id) {
    return client.get(MY_PROFILE, { params:{id: user_id}} )
    
}