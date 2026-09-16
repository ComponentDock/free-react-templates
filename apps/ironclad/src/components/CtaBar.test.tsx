import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBar } from './CtaBar'

describe('CtaBar', () => {
  it('renders the heading', () => {
    render(<CtaBar />)
    expect(
      screen.getByText(/Providing Personalized and High Quality Services/i),
    ).toBeInTheDocument()
  })

  it('renders the Request A Quote button', () => {
    render(<CtaBar />)
    expect(screen.getByRole('link', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBar />)
    expect(screen.getByText(/we can manage your dream building/i)).toBeInTheDocument()
  })
})
