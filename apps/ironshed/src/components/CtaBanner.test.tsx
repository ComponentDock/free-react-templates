import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the headline, subtitle, and CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /Start your Journey/ })).toBeInTheDocument()
    expect(screen.getByText(/Sed do eiusmod/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join With Us' })).toBeInTheDocument()
  })

  it('has a parallax background style', () => {
    const { container } = render(<CtaBanner />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
