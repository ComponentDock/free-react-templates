import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the "Our Expert Team" heading and team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Expert Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'James Edison' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'James Edison' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
