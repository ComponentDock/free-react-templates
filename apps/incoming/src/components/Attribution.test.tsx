import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('links Component Dock', () => {
    render(<Attribution />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders as the page footer', () => {
    const { container } = render(<Attribution />)

    expect(container.querySelector('footer')).toHaveTextContent(/made with/i)
  })

  it('accepts a className override', () => {
    const { container } = render(<Attribution className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
