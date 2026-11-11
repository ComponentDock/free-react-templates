import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Scene } from './Scene'

describe('Scene', () => {
  it('paints seven decorative layers and hides all of them from assistive tech', () => {
    const { container } = render(<Scene />)

    const scene = container.firstElementChild as HTMLElement
    expect(scene).toHaveClass('ap-scene')
    expect(scene).toHaveAttribute('aria-hidden', 'true')

    const layers = Array.from(scene.children).map((layer) => layer.className)
    expect(layers).toEqual([
      'ap-sky',
      'ap-stars',
      'ap-sun',
      'ap-range ap-range-far',
      'ap-range ap-range-mid',
      'ap-range ap-range-near',
      'ap-grain',
    ])
  })
})
