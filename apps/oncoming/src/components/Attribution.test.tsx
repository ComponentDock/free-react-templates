import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock with the only outbound link on the page', () => {
    render(<Attribution />)

    const credit = screen.getByText(/More templates at/)
    const link = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveTextContent('More templates at Component Dock')
    expect(credit.tagName).toBe('P')
    expect(credit).toHaveClass(
      'px-[15px]',
      'pb-[30px]',
      'text-center',
      'font-sans',
      'text-[12px]',
      'leading-[1.5]',
      'text-white/70',
    )
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveClass(
      'underline',
      'transition-opacity',
      'duration-[400ms]',
      'hover:opacity-80',
    )
  })

  it('accepts layout overrides', () => {
    render(<Attribution className="pb-0" />)

    expect(screen.getByText(/More templates at/)).toHaveClass('pb-0')
  })
})
