import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Concept } from './Concept'

describe('Concept', () => {
  it('renders the heading and the four concept cards with rounded images', () => {
    const { container } = render(<Concept />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Concept & artists/)

    for (const label of ['Soul Music', 'Live Concerts', 'Dj Sets', 'Live Streams']) {
      expect(screen.getByRole('heading', { level: 5, name: label })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: label })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('.rounded-\\[40px\\]')).toHaveLength(4)
  })
})
