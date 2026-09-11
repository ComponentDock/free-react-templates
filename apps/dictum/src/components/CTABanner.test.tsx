import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the heading', () => {
    render(<CTABanner />)
    expect(screen.getByText("Let's Get Started")).toBeInTheDocument()
  })

  it('has a teal background', () => {
    const { container } = render(<CTABanner />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-primary-300')
  })
})
