import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from '../components/CtaBanner'

describe('CtaBanner', () => {
  it('renders the Get Started label and button', () => {
    const { container } = render(<CtaBanner />)
    const elements = screen.getAllByText('Get Started')
    expect(elements.length).toBe(2)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /fill in the brief/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    const btn = screen.getByRole('link', { name: /get started/i })
    expect(btn).toHaveAttribute('href', '#contact')
  })
})
