import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Emergency } from './Emergency'

describe('Emergency', () => {
  it('renders the emergency band with phone number and Learn More link', () => {
    render(<Emergency />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/For Emergency care Just Call Us/)
    expect(screen.getByRole('link', { name: '+10 (89) 837 3678' })).toHaveAttribute(
      'href',
      'tel:+10898373678',
    )
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })
})
