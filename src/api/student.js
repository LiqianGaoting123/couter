import request from '@/utils/request'
//查询
export function getStudentListByToken(id, name, image, phone,) {
    return request({
        url: "/getStudentListByToken",
        method: 'GET',
        data: {
            id, name, image, phone,
        }
    })
}
//学生列表
export function getAllStudentList(  id, name, image, phone,){
    return request({
        url: "/getAllStudentList",
        method: 'GET',
        data: {
            id, name, image, phone,
        }
    })
}
//添加
export function addStudentToClass(studentId,classId){
    return request({
        url:'/addStudentToClass',
        method:'GET',
        data:{
            studentId,classId
        }
    })
}