var data = [
    {
        "id": "ea6e342b853b40a9bfd2eb4b14ce79ac",
        "cnName": "天津理工工业产品设计有限公司",
        "child": [
            {
                "id": "322f4c0d-c3c3-44a4-b445-b23e95dcf43e",
                "cnName": "全球部门",
                "child": [
                    {"id": "322f4c0d-c3c3-44a4-b445-b23e95dcf43e",
                    "parentId": "ea6e342b853b40a9bfd2eb4b14ce79ac",
                    "cnName": "全球部门",
                    "users": [
                        {
                            "id": "4df14453-addb-4663-85c2-ae55c49819b2123",
                            "portraitUrl": "http://imgsrc.baidu.com/forum/w=580/sign=3194e249b012c8fcb4f3f6c5cc0392b4/dce3b718972bd40776e5439472899e510eb30984.jpg",
                            "employeeName": "0041",
                        },
                        {
                            "id": "4df14453-addb-4663-85c2-ae55c49819b2211",
                            "portraitUrl": "http://cdn.duitang.com/uploads/item/201605/16/20160516220714_AeHNF.png",
                            "employeeName": "00411"
                        }
                    ],
                    }
                ],
                "users": [
                    {
                        "id": "4df14453-addb-4663-85c2-ae55c49819b21",
                        "portraitUrl": "http://tx.haiqq.com/uploads/allimg/170510/0RSQ4G-9.jpg",
                        "employeeName": "0041"
                    },
                    {
                        "id": "4df14453-addb-4663-85c2-ae55c49819b22",
                        "portraitUrl": "http://img5.duitang.com/uploads/item/201611/13/20161113110506_ScT45.thumb.700_0.jpeg",
                        "employeeName": "004"
                    }
                ],
                "isHightLight": null,
                "userCount": 1
            },
            {
                "id": "7a928631-1e9c-47da-9c05-890d53fcd61c",
                "cnName": "1",
                "child": [],
                "users": [
                    {
                        "id": "448e82b5-67b9-428c-97c9-ecaf714649851",
                        "portraitUrl": "http://p.3761.com/pic/58101403915021.jpg",
                        "employeeName": "003",
                    }
                ],
            }
        ],
        "users": [
            {
                "id": "b86e7eb6-ca51-43b5-a546-b08d65b9a1a41",
                "portraitUrl": "http://img2.imgtn.bdimg.com/it/u=1958966202,1289193182&fm=26&gp=0.jpg",
                "employeeName": "001"
            },
            {
                "id": "8c686334-9fbf-4583-91ba-2fb97e13d5d522",
                "portraitUrl": "http://cdn.duitang.com/uploads/item/201508/30/20150830175812_sYikS.jpeg",
                "employeeName": "222222222"
            },
            {
                "id": "aa42a93e-36d8-441b-aacd-6c951b6082b834",
                "portraitUrl": "http://cdn.duitang.com/uploads/item/201508/30/20150830105732_nZCLV.jpeg",
                "employeeName": "111111"
            },
            {
                "id": "ecaaabfe-540a-4923-a973-d2703d0b18b445",
                "portraitUrl": "http://a.hiphotos.baidu.com/zhidao/pic/item/21a4462309f79052782f28490ff3d7ca7bcbd591.jpg",
                "employeeName": "002"
            }
        ]
    }
]
//渲染user和子集菜单
function tree(obj,list=true) {
    let html = '';
    $.each(obj, function(index, item) {
        let flag=false;//有用户列表或者子集
        if((item.child&&item.child.length)||(item.users&&item.users.length)) flag=true;
        html += `<li>${list?'<input type=checkbox />':''}
        <span class='${flag?"state":""}'>${item.cnName}</span>`;
        if (flag) html+=`<ul>`;
        (item.child && item.child.length) && (html += tree(item.child,list));
        let usersFlag=false;
        if (item.users && item.users.length) usersFlag=true;
        if (usersFlag) {
            $.each(item.users, function(index, usersitem) {
                html += `<li>
                    <input type=checkbox class='userInp' data-id='${usersitem.id}' />
                    <span>
                        <dl>
                            <dt>
                                <img src='${usersitem.portraitUrl}' />
                            </dt>
                            <dd>
                            <p class='tit'> ${usersitem.employeeName}</p>
                            <p class='conp'> ${usersitem.employeeName}</p>
                        </dd>
                        </dl>
                    </span>
                </li>`;
            })
        }
        if (flag) html+=`</ul>`;
        html += `</li>`;
        
    });
    return html;
}
$(function(){
    $('#add_list .list').html(tree(data));
    $('.list').on('click','span.state',function(){
        $(this).toggleClass('change-state').next().slideToggle();
    })
})