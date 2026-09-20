import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FAQs } from './FAQs'

describe('FAQs', () => {
  it('renders the section heading', () => {
    render(<FAQs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Frequently Asked Questions/i,
    )
  })

  it('renders all 6 FAQ questions', () => {
    render(<FAQs />)
    expect(screen.getByText('How do I enroll in a course?')).toBeInTheDocument()
    expect(screen.getByText('Can I access courses on mobile?')).toBeInTheDocument()
    expect(screen.getByText('Do I get a certificate?')).toBeInTheDocument()
  })

  it('renders numbered items', () => {
    render(<FAQs />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
  })
})
