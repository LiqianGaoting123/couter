import request from '@/utils/request'
export function getClassListByToken(id, teamName, image, studentNum, capacity, courseName) {
    return request({
        url: "/getClassListByToken",
        method: 'GET',
        data: {
            id, 
            teamName,
             image, 
             studentNum,
              capacity, 
              courseName
        }
    })
}
export function addClass(teamName,courseId,capacity,classromm,teacherId){
    return request({
        url:"/addClass",
        method:'POST',

    })
}