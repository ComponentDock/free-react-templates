import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /what are you waiting for/i })).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/book your first session/i)).toBeInTheDocument()
  })

  it('renders Contact us now button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('button', { name: /contact us now/i })).toBeInTheDocument()
  })

  it('has teal background', () => {
    const { container } = render(<CtaBanner />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-brand')
  })
})
