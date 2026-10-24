import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the label, heading and the three counters', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Hello City We are leader in/)
    expect(heading.textContent).toMatch(/properties\./)

    for (const value of ['100', '300', '150']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['project', 'clients', 'member']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('offers a Learn More call to action and a framed photograph', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#projects')
    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toContain('picsum.photos/seed/manorly-about')
    expect(image).toHaveAttribute(
      'alt',
      'Estate agent handing over the keys of a city apartment',
    )
  })
})
