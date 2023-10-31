import XMLHttpRequest from './xhr.js'
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
// @ts-ignore
global.location = {href: 'https://api.example.com'};

import { setupServer } from 'msw/native'
import { handlers } from './handlers.js'

export const server = setupServer(...handlers)
