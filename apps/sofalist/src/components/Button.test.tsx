import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PillLink } from './Button'

describe('PillLink', () => {
  it('renders the white variant by default', () => {
    render(<PillLink href="#x">Discover</PillLink>)
    const link = screen.getByRole('link', { name: 'Discover' })
    expect(link).toHaveAttribute('href', '#x')
    expect(link.className).toContain('bg-paper')
    expect(link.className).toContain('rounded-[40px]')
  })

  it('renders the amber primary variant', () => {
    render(
      <PillLink href="#y" variant="primary">
        Learn More
      </PillLink>,
    )
    expect(screen.getByRole('link', { name: 'Learn More' }).className).toContain('bg-amber')
  })

  it('renders the dark-outline secondary variant', () => {
    render(
      <PillLink href="#z" variant="secondary">
        Get A Request
      </PillLink>,
    )
    expect(screen.getByRole('link', { name: 'Get A Request' }).className).toContain('border-ink')
  })
})
