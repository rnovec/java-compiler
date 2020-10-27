import request from '@/plugins/axios'

export function compile (data) {
  return request({
    url: '/compile',
    method: 'POST',
    data
  })
}
