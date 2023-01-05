import { NodePlopAPI } from 'plop'

import module from './modules/module'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Module', module)
}
