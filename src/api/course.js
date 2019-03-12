import request from '@/utils/request'
export function getCourseListByToken(id, image, courseName, price) {
    return request({
        url: '/getCourseListByToken',
        method: 'GET',
        data: {
            id, image, courseName, price,
        }
    })
}
export function addCourse(courseName,
    price,
    period,
    comment) {
    return request({
        url: "/addCourse",
        method: 'POST',
        data: {
            courseName,
            price,
            period,
            comment

        }
    })
}