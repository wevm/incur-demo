import packageJson from '../package.json' with { type: 'json' }
import { Binary, Cli, z } from 'incur'

const cli = Cli.create('incur-demo', {
  description: 'A small Incur CLI.',
  update: Binary.github({ repository: 'wevm/incur-demo' }),
  version: packageJson.version,
})

cli.command('greet', {
  description: 'Greet someone',
  args: z.object({
    name: z.string().optional().describe('Name to greet'),
  }),
  output: z.object({
    message: z.string().describe('Greeting'),
  }),
  examples: [{ args: { name: 'Ada' }, description: 'Greet Ada' }],
  run(context) {
    return { message: `Hello, ${context.args.name ?? 'world'}!` }
  },
})

cli.command('ping', {
  description: 'Check that the CLI works',
  output: z.object({
    message: z.literal('pong').describe('Health response'),
  }),
  run() {
    return { message: 'pong' as const }
  },
})

export default cli
