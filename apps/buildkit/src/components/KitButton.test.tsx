import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { COLOR_LABELS, KIT_COLORS, KitButton } from './KitButton'

describe('KitButton', () => {
  it('renders a solid fill for every kit color', () => {
    render(
      <>
        {KIT_COLORS.map((color) => (
          <KitButton key={color} color={color} variant="solid" size="md">
            {COLOR_LABELS[color]}
          </KitButton>
        ))}
      </>,
    )

    expect(screen.getByRole('button', { name: 'Primary' }).className).toContain('bg-primary-600')
    expect(screen.getByRole('button', { name: 'Success' }).className).toContain('bg-success')
    expect(screen.getByRole('button', { name: 'Info' }).className).toContain('bg-info')
    expect(screen.getByRole('button', { name: 'Dark' }).className).toContain('bg-heading')
    expect(screen.getByRole('button', { name: 'Light' }).className).toContain('bg-light')
  })

  it('renders the outline, round, link, white and block shapes', () => {
    render(
      <>
        <KitButton color="primary" variant="outline" size="sm">
          Outline
        </KitButton>
        <KitButton color="primary" variant="round" size="lg">
          Round
        </KitButton>
        <KitButton color="primary" variant="link" size="md">
          Link
        </KitButton>
        <KitButton color="primary" variant="white" size="md">
          White
        </KitButton>
        <KitButton color="primary" variant="solid" size="block">
          Block
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Outline' }).className).toContain(
      'border-primary-600',
    )
    expect(screen.getByRole('button', { name: 'Outline' }).className).toContain('px-3')
    expect(screen.getByRole('button', { name: 'Round' }).className).toContain('rounded-full')
    expect(screen.getByRole('button', { name: 'Round' }).className).toContain('text-lg')
    expect(screen.getByRole('button', { name: 'Link' }).className).toContain('shadow-none')
    expect(screen.getByRole('button', { name: 'White' }).className).toContain('bg-white')
    expect(screen.getByRole('button', { name: 'Block' }).className).toContain('w-full')
  })

  it('carries the material elevation and forwards disabled state and handlers', async () => {
    const onClick = vi.fn()
    render(
      <>
        <KitButton color="primary" variant="solid" size="md" onClick={onClick}>
          Press
        </KitButton>
        <KitButton color="danger" variant="solid" size="md" disabled>
          Off
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Press' }).className).toContain('shadow-material')
    expect(screen.getByRole('button', { name: 'Off' })).toBeDisabled()

    await userEvent.click(screen.getByRole('button', { name: 'Press' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('lets callers override the composed classes', () => {
    render(
      <KitButton color="primary" variant="solid" size="md" className="uppercase">
        Custom
      </KitButton>,
    )

    expect(screen.getByRole('button', { name: 'Custom' }).className).toContain('uppercase')
  })
})
