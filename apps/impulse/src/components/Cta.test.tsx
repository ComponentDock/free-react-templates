import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the Get Started heading', () => {
    render(<Cta />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Cta />)
    expect(screen.getByText(/bring your creative vision/)).toBeInTheDocument()
  })

  it('renders the Get In Touch button', () => {
    render(<Cta />)
    const btn = screen.getByRole('link', { name: /get in touch/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#')
  })

  it('has brand background color', () => {
    render(<Cta />)
    const section = screen.getByText('Get Started').closest('section')
    expect(section?.className).toContain('bg-brand')
  })
})
