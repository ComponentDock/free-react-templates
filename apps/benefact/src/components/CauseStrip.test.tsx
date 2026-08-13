import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CauseStrip } from './CauseStrip'

describe('CauseStrip', () => {
  it('shows three tinted cause cards with white script titles', () => {
    const { container } = render(<CauseStrip />)
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)

    expect(screen.getByText('Livelihood')).toBeInTheDocument()
    expect(screen.getByText('Natural Remedies')).toBeInTheDocument()
    expect(screen.getByText('New Class Rooms')).toBeInTheDocument()

    const tints = container.querySelectorAll('article .mix-blend-screen')
    expect(tints[0]!).toHaveStyle({ backgroundColor: 'rgb(220, 53, 69)' })
    expect(tints[1]!).toHaveStyle({ backgroundColor: 'rgb(255, 193, 7)' })
    expect(tints[2]!).toHaveStyle({ backgroundColor: 'rgb(0, 166, 81)' })
  })

  it('overlaps the hero bottom and stacks on mobile', () => {
    const { container } = render(<CauseStrip />)
    expect(container.querySelector('section')).toHaveClass('-mt-5')
    expect(container.querySelector('section')).toHaveClass('z-10')
    expect(container.querySelector('.grid')).toHaveClass('grid-cols-1')
    expect(container.querySelector('.grid')).toHaveClass('md:grid-cols-3')
  })
})
