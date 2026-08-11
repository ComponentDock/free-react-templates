import { describe, expect, it } from 'vitest'
import { BTN_2, BTN_3 } from './buttons'

describe('buttons', () => {
  it('recreates the .btn_2 recipe (white bg, purple text/border, asymmetric radius, gradient hover)', () => {
    expect(BTN_2).toContain('bg-white')
    expect(BTN_2).toContain('text-brand')
    expect(BTN_2).toContain('border-brand')
    expect(BTN_2).toContain('rounded-tl-[20px]')
    expect(BTN_2).toContain('rounded-br-[20px]')
    expect(BTN_2).toContain('linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)')
  })

  it('recreates the .btn_3 recipe (gradient fill, white text, hover corner flip)', () => {
    expect(BTN_3).toContain('bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)]')
    expect(BTN_3).toContain('text-white')
    expect(BTN_3).toContain('hover:rounded-tr-[20px]')
    expect(BTN_3).toContain('hover:rounded-bl-[20px]')
  })
})
