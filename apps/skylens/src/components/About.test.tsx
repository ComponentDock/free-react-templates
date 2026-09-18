import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /hassle-free drone photography/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/professional aerial photography and videography/i)).toBeInTheDocument()
  })

  it('displays the experience badge', () => {
    render(<About />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText(/years of experience/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    const btn = screen.getByRole('link', { name: /explore services/i })
    expect(btn).toHaveAttribute('href', '#services')
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText(/drone photography in action/i)
    expect(img).toBeInTheDocument()
  })
})
