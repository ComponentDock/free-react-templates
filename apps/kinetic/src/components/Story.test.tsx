import { render, screen } from '@testing-library/react'
import { Story } from './Story'
import { describe, expect, it } from 'vitest'

describe('Story', () => {
  it('renders story heading', () => {
    render(<Story />)
    expect(screen.getByText(/from the part of beginning/i)).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Story />)
    expect(screen.getByText(/internet is becoming more common/i)).toBeInTheDocument()
  })

  it('renders Get Started CTA linking to contact', () => {
    render(<Story />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
