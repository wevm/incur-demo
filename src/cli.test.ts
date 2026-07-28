import { describe, expect, test } from 'vitest'

import packageJson from '../package.json' with { type: 'json' }
import cli from './cli.js'

describe('cli', () => {
  test('responds to ping', async () => {
    const response = await cli.fetch(new Request('http://localhost/ping'))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({
      data: { message: 'pong' },
      ok: true,
    })
  })

  test('reports the package version', async () => {
    let output = ''

    await cli.serve(['--version'], {
      stdout(value) {
        output += value
      },
    })

    expect(output).toBe(`${packageJson.version}\n`)
  })
})
