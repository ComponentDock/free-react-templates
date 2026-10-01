import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SkewedButton, SkewedChip } from './SkewedButton'

describe('SkewedButton', () => {
  it('renders an anchor when href is provided, with counter-skewed label', () => {
    const onClick = vi.fn()
    render(
      <SkewedButton href="#services" ariaLabel="Go to services" onClick={onClick}>
        View services
      </SkewedButton>,
    )
    const link = screen.getByRole('link', { name: 'Go to services' })
    expect(link).toHaveAttribute('href', '#services')
    expect(link.className).toContain('-skew-x-[30deg]')
    expect(link.querySelector('span')?.className).toContain('skew-x-[30deg]')
  })

  it('renders a submit button when no href is given', () => {
    render(<SkewedButton type="submit">Submit Now</SkewedButton>)
    const button = screen.getByRole('button', { name: 'Submit Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('bg-brand')
  })
})

describe('SkewedChip', () => {
  it('renders the orange -32deg chip with a counter-skewed label', () => {
    render(<SkewedChip>Guides</SkewedChip>)
    const chip = screen.getByText('Guides').parentElement
    expect(chip?.className).toContain('-skew-x-[32deg]')
    expect(chip?.className).toContain('bg-brand')
    expect(screen.getByText('Guides').className).toContain('skew-x-[30deg]')
  })
})
