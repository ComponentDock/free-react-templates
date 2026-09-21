import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA heading', () => {
    render(<CallToAction />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Are You Looking For A Loan/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA description', () => {
    render(<CallToAction />)
    expect(screen.getByText(/financial support you need/i)).toBeInTheDocument()
  })

  it('renders the Apply Now button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: /apply now/i })).toHaveAttribute('href', '#get-started')
  })

  it('renders the background image', () => {
    render(<CallToAction />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
