import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /we have great results/i })).toBeInTheDocument()
  })

  it('renders three stat items', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Award Winning')).toBeInTheDocument()
    expect(screen.getByText('60 Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Best Attorneys team')).toBeInTheDocument()
  })

  it('renders consultation button', () => {
    render(<CtaBanner />)
    const button = screen.getByText('Free Case Consultation')
    expect(button).toBeInTheDocument()
    expect(button.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('renders background image', () => {
    const { container } = render(<CtaBanner />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/docket-cta/1920/400')
  })
})
