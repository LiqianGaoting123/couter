import request from '@/utils/request'
export function getTeacherListByToken(id, image, name, phone) {
    return request({
        url: '/getTeacherListByToken',
        method: 'GET',
        data: {
            id, image, name, phone,
        }
    })
}
export function getTeacherToAdd( id, image, name, phone,) {
    return request({
        url: "/getTeacherToAdd",
        method: 'GET',
        data: {
            id, image, name, phone,

        }
    })
}
export function addTeacherToOrg(teacherId){
    return request({
        url:'/addTeacherToOrg',
        method:'GET',
        data:{
            teacherId
        }
    })
}