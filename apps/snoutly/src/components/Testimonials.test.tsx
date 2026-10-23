import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and three customer quotes with authors', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('What Pet Owners Say')
    expect(screen.getAllByRole('figure')).toHaveLength(3)
    for (const author of ['Jon Miller', 'Sarah Mitchell', 'David Chen']) {
      expect(screen.getByText(`- ${author}`)).toBeInTheDocument()
    }
  })
})
