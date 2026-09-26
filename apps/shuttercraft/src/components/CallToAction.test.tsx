import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA heading', () => {
    render(<CallToAction />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Let.*Work Together/i }),
    ).toBeInTheDocument()
  })

  it('renders the get in touch button', () => {
    render(<CallToAction />)
    const btn = screen.getByText('Get in Touch')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('renders the button with uppercase styling', () => {
    render(<CallToAction />)
    const btn = screen.getByText('Get in Touch')
    expect(btn).toHaveClass('uppercase')
  })
})
