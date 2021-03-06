import axios from 'axios'
import { baseUrl } from '../config/env.js'

axios.defaults.withCredentials = true;
var myAxios = axios.create({
  baseURL: baseUrl,
  timeout: 8000,
//   withCredentials: true, 两种设置方式都可以
});

// 获取广场动态数据
export const getSquareActive = (data) => myAxios.post( 'square/getDongTais', data)

//发表新动态
export const postNewDongTai = (data) => myAxios.post( 'postNewDongTai', data )

//获取指定动态
export const getDongtaiByIds =  (data) => myAxios.post( 'getDongtaiByIds', data )

//回复动态
export const dongTaiReply = (data) => myAxios.post('dongTaiReply', data)

export const signup = (data) => myAxios.post( 'signup', data)

export const login = (data) => myAxios.post( 'login', data)

export const signout = () => myAxios.get( 'signout')

export const fixInforReq = (data) => myAxios.post( 'fixInfoReq', data)

//获取自己的信息
export const getUserInfo = () => myAxios.get( 'getUserInfo' )

//获取他人的信息
export const getOtherInfo = ( own_id, other_id ) => myAxios.get( `getOtherInfo/?own_id=${own_id}&other_id=${other_id}`)


//消除未读消息
export const clearReadMsg = ( other_id ) => myAxios.get(`clearReadMsg/?other_id=${other_id}`)


export const addFriend = ( own_id, other_id ) => myAxios.get( `addFriend/?own_id=${own_id}&other_id=${other_id}` )

export const getRelationList = () => myAxios.get('getRelationList')

export const searchUser = ( searchKey ) => myAxios.get( `searchUser/?searchKey=${searchKey}` )

export const getUsersByRandom = () => myAxios.get('getUsersByRandom')

//更新头像
export const updateAvatar_getToken = ( data ) => myAxios.get('updateAvatar_getToken')

export const updateAvatar_saveUrl = ( data ) => myAxios.post('updateAvatar_saveUrl', data)

//管理员删除动态
export const deleteDongtai = ( data ) => myAxios.post('deleteDongtai', data)



