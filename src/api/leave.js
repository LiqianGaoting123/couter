import request from '@/utils/request'
export function getAbsentListByToken(absentid, image, studentName, startDate, endDate, applyTime) {
    return request({
        url: '/getAbsentListByToken',
        method: 'GET',
        data: {
            absentid, image, studentName, startDate, endDate, applyTime
        }
    })
}
export function applyAbsence(classId,startDate,endDate){
    return request({
        url:'/applyAbsence',
        method:'POST',
        data:{
            classId,startDate,endDate
        }
    })
}