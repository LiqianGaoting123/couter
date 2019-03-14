import request from '@/utils/request'
export function enroll(courseId,price,number,studentId) {
    return request({
        url: '/enroll',
        method: 'POST',
        data: {
            courseId,price,number,studentId
        }
    })
}
