export function getTreePermissions(){
    return  [
        {
    title: '教务中心', icon: 'example' ,
    children: [
        {
            title: '学员管理',
        },
        {
            title: '班級管理',
        },
        {
            title: '老師管理',
        },
        {
            title: '課程/收費' ,
        },
        {
            title: '上课记录' ,
        },
      
    ]
},
{

    title: '销售中心',
    children: [
        {
            title: '学员档案',
        },
    ]
},
{

    title: '财务中心',
    children: [
                {
                    title: '学员报名',
                },
                {
                    title: '收据清单',
                },
            ]
        
        
    
},
{
    title: '数据中心',
    children: [
        {
            title: '教务数据',
        },
        {
            title: '销售数据',
        },
        {
            title: '財务数据',
        },
        {
            title: '资金报表',
        },
    ]
},

    ]
}