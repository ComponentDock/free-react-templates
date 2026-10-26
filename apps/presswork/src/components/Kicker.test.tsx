import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Kicker } from './Kicker'
import { KICKER } from '../data/site'

describe('Kicker', () => {
  it('renders the three runs in order', () => {
    const { container } = render(<Kicker />)
    const runs = Array.from(container.querySelectorAll('.pw-kicker > span'))

    expect(runs).toHaveLength(3)
    expect(runs.map((run) => run.textContent)).toEqual([...KICKER])
    expect(runs[0]).toHaveTextContent('Brand & digital studio')
  })

  it('generates the slash separators instead of typing them', () => {
    const { container } = render(<Kicker />)
    const kicker = container.querySelector('.pw-kicker')

    expect(kicker?.textContent).toBe(KICKER.join(''))
    expect(kicker?.textContent).not.toContain('/')
  })

  it('is a paragraph, not a list', () => {
    const { container } = render(<Kicker />)

    expect(container.querySelectorAll('p')).toHaveLength(1)
    expect(container.querySelectorAll('li')).toHaveLength(0)
  })
})
