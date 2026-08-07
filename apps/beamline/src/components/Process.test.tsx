import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'

describe('Process', () => {
  it('shows the three process cards with blurbs', () => {
    render(<Process />)

    for (const title of ['Design Process', 'Supervision', 'Budget Planning']) {
      const card = screen.getByRole('heading', { level: 3, name: title }).closest('article')
      expect(card).not.toBeNull()
      expect(card).toHaveTextContent(/river|project|design|plan/i)
    }
  })

  it('shows the Build a Home For You call-to-action', () => {
    render(<Process />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Build a Home For You' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request A Quote' })).toBeInTheDocument()
  })
})
