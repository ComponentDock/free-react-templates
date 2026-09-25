import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Get your tickets now!')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/In vitae nisi aliquam/)).toBeInTheDocument()
  })

  it('renders Buy Now button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Buy Now')).toBeInTheDocument()
  })

  it('has background image', () => {
    const { container } = render(<CtaBanner />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('vinylspin-cta')
  })
})
