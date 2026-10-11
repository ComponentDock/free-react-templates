import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Heart } from 'lucide-react'
import { COLOR_LABELS, KIT_COLORS, KitButton, KitLink } from './KitButton'

describe('KitButton', () => {
  it('applies the solid fill, softly shadowed and uppercase', () => {
    render(
      <KitButton color="primary" variant="solid" size="md">
        Button
      </KitButton>,
    )

    const button = screen.getByRole('button', { name: 'Button' })
    expect(button.className).toContain('bg-kit-primary')
    expect(button.className).toContain('shadow-btn-primary')
    expect(button.className).toContain('uppercase')
    expect(button.getAttribute('type')).toBe('button')
  })

  it('renders the outline and pill shapes with the 50px radius', () => {
    render(
      <>
        <KitButton color="info" variant="outline" size="sm">
          Outline
        </KitButton>
        <KitButton color="info" variant="pill" size="sm">
          Pill
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Outline' }).className).toContain('border-kit-info')
    const pill = screen.getByRole('button', { name: 'Pill' })
    expect(pill.className).toContain('rounded-full')
    expect(pill.className).toContain('px-4')
  })

  it('supports all kit colors, variants, and icon children', () => {
    const { container } = render(
      <>
        {KIT_COLORS.map((color) => (
          <KitButton key={color} color={color} variant="solid" size="lg">
            {COLOR_LABELS[color]}
          </KitButton>
        ))}
        <KitButton color="success" variant="solid" size="sm">
          <Heart aria-hidden="true" />
          With icon
        </KitButton>
        <KitButton color="danger" variant="solid" size="md" disabled>
          Disabled
        </KitButton>
      </>,
    )

    expect(container.querySelectorAll('button')).toHaveLength(KIT_COLORS.length + 2)
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'With icon' }).querySelector('svg')).not.toBeNull()
  })

  it('forwards click handlers and merges caller classes', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <KitButton color="warning" variant="solid" size="md" className="mt-4" onClick={onClick}>
        Click me
      </KitButton>,
    )

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button.className).toContain('mt-4')

    await user.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('KitLink', () => {
  it('renders an anchor styled like a kit button', () => {
    render(
      <KitLink href="#start" color="info" variant="solid" size="md" className="rounded px-4 py-3">
        See Here
      </KitLink>,
    )

    const link = screen.getByRole('link', { name: 'See Here' })
    expect(link).toHaveAttribute('href', '#start')
    expect(link.className).toContain('bg-kit-info')
    expect(link.className).toContain('shadow-btn-info')
  })
})
