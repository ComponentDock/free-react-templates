import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('links Component Dock', () => {
    render(<Attribution />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/^Made with/)).toBeInTheDocument()
  })

  it('merges a className override', () => {
    const { container } = render(<Attribution className="text-xs" />)
    expect(container.firstElementChild).toHaveClass('text-xs')
  })
})
