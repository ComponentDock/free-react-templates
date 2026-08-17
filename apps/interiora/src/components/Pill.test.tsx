import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PillLink } from './Pill'

describe('PillLink', () => {
  it('renders its children as a link', () => {
    render(<PillLink href="#test">Hello</PillLink>)
    expect(screen.getByRole('link', { name: 'Hello' })).toHaveAttribute('href', '#test')
  })

  it('applies the orange variant by default', () => {
    render(<PillLink href="#test">Orange</PillLink>)
    expect(screen.getByRole('link', { name: 'Orange' }).className).toContain('bg-brand')
  })

  it('applies the dark variant when requested', () => {
    render(
      <PillLink href="#test" variant="dark">
        Dark
      </PillLink>,
    )
    expect(screen.getByRole('link', { name: 'Dark' }).className).toContain('border-ink')
  })

  it('applies the outline variant when requested', () => {
    render(
      <PillLink href="#test" variant="outline">
        Outline
      </PillLink>,
    )
    expect(screen.getByRole('link', { name: 'Outline' }).className).toContain('border-brand')
  })

  it('merges a custom className', () => {
    render(
      <PillLink href="#test" className="mt-4">
        Merged
      </PillLink>,
    )
    expect(screen.getByRole('link', { name: 'Merged' }).className).toContain('mt-4')
  })
})
