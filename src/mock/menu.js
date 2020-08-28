var menusInfo = {
  data: [
    {
      "name": "收银台",
      "childMenus": [
        {
          "name": "收银",
          "childMenus": [],
          "pId": "M001",
          "id": "M002"
        },
        {
          "name": "开卡",
          "childMenus": [],
          "pId": "M001",
          "id": "M003"
        },
        {
          "name": "消费记录",
          "childMenus": [],
          "pId": "M001",
          "id": "M004"
        }
      ],
      "id": "M001"
    },
    {
      "name": "会员中心",
      "childMenus": [
        {
          "name": "会员列表",
          "childMenus": [],
          "pId": "M005",
          "id": "M006"
        }
      ],
      "id": "M005"
    },
    {
      "name": "财务中心",
      "childMenus": [
        {
          "name": "员工提成核对",
          "childMenus": [],
          "pId": "M007",
          "id": "M018"
        },
        {
          "name": "员工业绩核对",
          "childMenus": [],
          'url':'commision.html',
          "pId": "M007",
          "id": "M008"
        }
      ],
      "id": "M007"
    },
    {
      "name": "系统设置",
      "childMenus": [
        {
          "name": "开店设置",
          "childMenus": [
            {
              "name": "添加员工",
              "childMenus": [],
              "pId": "M010",
              "id": "M011"
            },
            {
              "name": "添加卡类型",
              "childMenus": [],
              "pId": "M010",
              "id": "M012",
              "url":"viewCard.html"
            },
            {
              "name": "添加服务项目",
              "childMenus": [],
              "pId": "M010",
              "id": "M013"
            }
          ],
          "pId": "M009",
          "id": "M010"
        },
        {
          "name": "提成设置",
          "childMenus": [
            {
              "name": "服务项目提成设置",
              "childMenus": [],
              "pId": "M014",
              "id": "M015"
            },
            {
              "name": "开卡充值提成项目",
              "childMenus": [],
              "pId": "M014",
              "id": "M016"
            }
          ],
          "pId": "M009",
          "id": "M014"
        },
        {
          "name": "系统安全",
          "childMenus": [],
          "pId": "M009",
          "id": "M017"
        }
      ],
      "id": "M009"
    }
  ],
  meta: {
    msg: '获取菜单成功',
    status: 200
  }
}

var menus = {
  menusInfo
}

export default menus
