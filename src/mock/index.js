import Mock from 'mockjs'
import User from './user'
import Menus from './menu'
import Users from './users'
import Cards from './card'

Mock.mock('login', 'post', () => {
    return User.userInfo
})

Mock.mock('menus', 'get', () => {
    return Menus.menusInfo
})

Mock.mock(RegExp('users' + '*'), 'get', () => {
    return Users.usersInfo
})

Mock.mock(RegExp('cards' + '*'), 'get', () => {
    return Cards.cardsInfo
})
