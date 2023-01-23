import type { Config } from 'jest'
import { resolve } from 'path'

import defaultConfig from '../../jest.config'

const config: Config = {
  ...defaultConfig,

  roots: ['../integrations'],

  globalSetup: resolve(__dirname, 'integration-setup.config.ts'),
  globalTeardown: resolve(__dirname, 'integration-teardown.config.ts'),
}

export default config
