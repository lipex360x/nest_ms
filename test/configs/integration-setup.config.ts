import { PostgreSqlContainer } from 'testcontainers'

const baseDbTestContainer = new PostgreSqlContainer('postgres')

export default async () => {
  console.time('[Postgres container] started in')
  console.log('[Postgres container] starting...')

  const startedTestContainer = await baseDbTestContainer.start()

  process.env.TYPEORM_HOST = startedTestContainer.getHost()
  process.env.TYPEORM_PORT = String(startedTestContainer.getMappedPort(5432))
  process.env.TYPEORM_USERNAME = startedTestContainer.getUsername()
  process.env.TYPEORM_PASSWORD = startedTestContainer.getPassword()
  process.env.TYPEORM_DATABASE = startedTestContainer.getDatabase()

  global.TESTCONTAINER_POSTGRES = startedTestContainer

  console.timeEnd('[Postgres container] started in')
}
