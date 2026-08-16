import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'

describe('Counters', () => {
  it('sits on a background photo with a dark overlay', () => {
    const { container } = render(<Counters />)

    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum')
    expect(section.querySelector('[data-counter-overlay]')).not.toBeNull()
  })

  it('renders four counters with white numbers and captions', () => {
    render(<Counters />)

    for (const counter of counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/3000|320|1000|587/)).toHaveLength(4)
  })

  it('renders a white icon per counter', () => {
    const { container } = render(<Counters />)

    expect(container.querySelectorAll('svg')).toHaveLength(counters.length)
  })
})
