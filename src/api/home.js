import api from './index'
// axios
import request from '@/utils/request'

// 文章接口
export function articleApi (data) {
  return request({
    url: '/framework/all/article/page',
    method: 'post',
    data
  })
}


// 信息接口
export function infoApi (data) {
  return request({
    url: '/framework/all/subject/info',
    method: 'post',
    data
  })
}

