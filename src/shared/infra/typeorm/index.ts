import { createConnection, getConnectionOptions } from 'typeorm'

class OrmConnect {
  static async execute (): Promise<boolean> {
    const options = await getConnectionOptions()

    Object.assign(options, {
      connection: process.env.TYPEORM_CONNECTION
    })

    console.log('\nš” Traying to connect to postgres...')

    try {
      await createConnection()
      console.log('š Connected to database postgres')
      return true
    } catch (error) {
      console.log('ā Fail to Connect to postgres', error)
      process.exit()
    }
  }
}
export default OrmConnect
