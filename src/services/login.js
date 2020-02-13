import api from './api'
import { sleep } from '../util/generalUtilities'

export const fetchLogin = async login => {
  await sleep(2000)
  const resultFake = { token: '!Q##WQ@$#$W43wrew34@WR324wre54' }
  return resultFake
  //   return api.post('/login', login)
}
