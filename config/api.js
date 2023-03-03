//引入请求方法
import {
	request
} from './request.js';

export const getIosUrl = (data) => request({ url: '/api/app/getLinkAndVersion', method: 'get', data: data });
export const sendForum = (data) => request({url: '接口地址',method: 'post',data: data})