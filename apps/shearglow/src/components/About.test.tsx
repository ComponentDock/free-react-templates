import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Us heading and subheadings', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Hair Salon/i })).toBeInTheDocument()
    expect(screen.getByText('The House of Hair Salon & Spa')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Beautiful Hair Comes From A Legendary/i }),
    ).toBeInTheDocument()
  })

  it('renders the About Us image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'ShearGlow salon interior' })).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /Read More/i })).toBeInTheDocument()
  })
})
