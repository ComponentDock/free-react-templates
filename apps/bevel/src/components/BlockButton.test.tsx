import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockButton } from './BlockButton'

describe('BlockButton', () => {
  it('renders the "Full width button" label', () => {
    render(<BlockButton />)

    expect(screen.getByText('Full width button')).toBeInTheDocument()
  })

  it('renders a single block-level Button', () => {
    render(<BlockButton />)

    const button = screen.getByRole('button', { name: 'Button' })
    expect(button).toBeInTheDocument()
    expect(button.className).toContain('block')
    expect(button.className).toContain('w-full')
  })

  it('applies custom className', () => {
    const { container } = render(<BlockButton className="extra" />)

    expect(container.firstElementChild?.className).toContain('extra')
  })

  it('uses primary blue background', () => {
    render(<BlockButton />)

    const button = screen.getByRole('button', { name: 'Button' })
    expect(button).toHaveStyle({ backgroundColor: '#007bff' })
  })
})
