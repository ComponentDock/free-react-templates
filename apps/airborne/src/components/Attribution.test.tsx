import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock with a single outbound link', () => {
    const { container } = render(<Attribution />)

    expect(container.firstElementChild).toHaveClass(
      'pt-[10px]',
      'text-center',
      'text-[12px]',
      'text-note',
    )

    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(container.textContent).toContain('More templates at')
  })

  it('accepts a className override', () => {
    const { container } = render(<Attribution className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
