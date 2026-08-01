import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonLink } from '@free-react-templates/ui'

describe('ButtonLink', () => {
  it('renders an anchor with the default variant and size', () => {
    render(<ButtonLink href="/">Go home</ButtonLink>)
    const link = screen.getByRole('link', { name: 'Go home' })
    expect(link).toHaveAttribute('href', '/')
  })

  it.each(['primary', 'outline'] as const)('applies the %s variant classes', (variant) => {
    render(
      <ButtonLink href="/" variant={variant}>
        Label
      </ButtonLink>,
    )
    const link = screen.getByRole('link', { name: 'Label' })
    if (variant === 'primary') {
      expect(link.className).toContain('bg-primary-600')
    } else {
      expect(link.className).toContain('border')
    }
  })

  it.each(['sm', 'md'] as const)('applies the %s size classes', (size) => {
    render(
      <ButtonLink href="/" size={size}>
        Label
      </ButtonLink>,
    )
    const link = screen.getByRole('link', { name: 'Label' })
    if (size === 'sm') {
      expect(link.className).toContain('h-8')
    } else {
      expect(link.className).toContain('h-10')
    }
  })

  it('forwards extra anchor attributes', () => {
    render(
      <ButtonLink href="https://example.com" target="_blank" rel="noreferrer">
        External
      </ButtonLink>,
    )
    const link = screen.getByRole('link', { name: 'External' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('merges a custom className with the defaults', () => {
    render(
      <ButtonLink href="/" className="custom-class">
        Label
      </ButtonLink>,
    )
    expect(screen.getByRole('link', { name: 'Label' })).toHaveClass('custom-class')
  })
})
