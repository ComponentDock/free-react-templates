import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Discount } from './Discount'

describe('Discount', () => {
  it('shows the heading "Get 20% discount" in the brand peach color', () => {
    render(<Discount />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Get 20% discount' })
    expect(heading.className).toContain('text-brand')
  })

  it('shows a lead paragraph', () => {
    render(<Discount />)

    expect(screen.getByText(/book your escape/i)).toBeInTheDocument()
  })

  it('shows a "Contact us" pill button', () => {
    render(<Discount />)

    const button = screen.getByRole('link', { name: 'Contact us' })
    expect(button).toHaveAttribute('href', '#footer')
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('bg-brand')
  })
})
