import XMLHttpRequest from './xhr.js'
import {fetch} from 'whatwg-fetch'
global.XMLHttpRequest = XMLHttpRequest
global.fetch = fetch

import { setupServer } from 'msw/native'
import { handlers } from './handlers.js'

export const server = setupServer(...handlers)
