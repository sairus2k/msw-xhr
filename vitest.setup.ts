import XMLHttpRequest from './mocks/xhr.js'
import {fetch} from 'whatwg-fetch'
// @ts-ignore
import Response from 'react-native-fetch-api/src/Response';
// @ts-ignore
import Request from 'react-native-fetch-api/src/Request';
// @ts-ignore
import Headers from 'react-native-fetch-api/src/Headers';
global.XMLHttpRequest = XMLHttpRequest
global.fetch = fetch
global.Request = Request
global.Response = Response
global.Headers = Headers

import { server } from './mocks/node.js'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
