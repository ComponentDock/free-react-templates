import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the kicker and experience heading', () => {
    render(<About />)

    expect(screen.getByText('About Us', { selector: 'p' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: '52 Years of Experience in This Area' }),
    ).toBeInTheDocument()
  })

  it('shows a blurb and an About Us button', () => {
    render(<About />)

    expect(screen.getByText(/lasting impressions through architecture design/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the two section photos', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: /high-rise building/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /architecture detail/i })).toBeInTheDocument()
  })
})
