import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /are you ready to start/i })).toBeInTheDocument()
  })

  it('renders the paragraph text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/get in touch with our team/i)).toBeInTheDocument()
  })

  it('renders the Request A Quote button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<CtaBanner />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('nectar-cta'))
  })

  it('renders the background image with aria-hidden', () => {
    const { container } = render(<CtaBanner />)
    const img = container.querySelector('img[aria-hidden="true"]')
    expect(img).toBeInTheDocument()
  })

  it('renders the overlay div with aria-hidden', () => {
    const { container } = render(<CtaBanner />)
    const overlays = container.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(2)
  })
})
