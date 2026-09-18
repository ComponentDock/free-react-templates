import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoverGoals } from './CoverGoals'

describe('CoverGoals', () => {
  it('renders the heading', () => {
    render(<CoverGoals />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Our Goal is to Make Your Life Better',
    )
  })

  it('renders three goal items', () => {
    render(<CoverGoals />)
    expect(screen.getByText('Expert Nursing Staff')).toBeInTheDocument()
    expect(screen.getByText('Community Living')).toBeInTheDocument()
    expect(screen.getByText('Medical Support')).toBeInTheDocument()
  })

  it('has a background image overlay', () => {
    const { container } = render(<CoverGoals />)
    const overlay = container.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
