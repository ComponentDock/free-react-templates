import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attribution } from './Attribution'

describe('Attribution', () => {
  it('credits Component Dock in the shared footer line', () => {
    render(<Attribution />)

    const line = screen.getByTestId('attribution')

    expect(line).toHaveTextContent('More templates at Component Dock')
    expect(line).toHaveClass('text-center', 'font-sans', 'text-[12px]')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('accepts layout overrides', () => {
    render(<Attribution className="pt-0" />)

    expect(screen.getByTestId('attribution')).toHaveClass('pt-0')
  })
})
