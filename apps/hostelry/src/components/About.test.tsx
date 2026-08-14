import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, paragraph, dark CTA and photo', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: 'About Us Our History Mission & Vision',
        level: 2,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request Custom Price' })).toHaveAttribute(
      'href',
      '#booking',
    )
    expect(screen.getByRole('img', { name: 'The Hostelry hotel grounds' })).toBeInTheDocument()
  })
})
