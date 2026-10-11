import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { COLOR_LABELS, KIT_COLORS, KitButton, KitLink } from './KitButton'

describe('KitButton', () => {
  it('renders every color label as a flat solid button', () => {
    render(
      <>
        {KIT_COLORS.map((color) => (
          <KitButton key={color} color={color} variant="solid" size="md">
            {COLOR_LABELS[color]}
          </KitButton>
        ))}
      </>,
    )

    expect(screen.getAllByRole('button')).toHaveLength(KIT_COLORS.length)
    expect(screen.getByRole('button', { name: 'Primary' }).className).toContain('bg-primary-500')
    expect(screen.getByRole('button', { name: 'Primary' }).className).toContain('text-heading')
    expect(screen.getByRole('button', { name: 'Rose' }).className).toContain('bg-rose')
    expect(screen.getByRole('button', { name: 'Primary' }).className).not.toContain('shadow')
  })

  it('renders the outline, round, link and white variants', () => {
    render(
      <>
        <KitButton color="primary" variant="outline" size="md">
          Default Button
        </KitButton>
        <KitButton color="primary" variant="round" size="md">
          Round Button
        </KitButton>
        <KitButton color="primary" variant="link" size="md">
          Simple Button
        </KitButton>
        <KitButton color="primary" variant="white" size="sm">
          Get Started
        </KitButton>
        <KitButton color="success" variant="solid" size="lg">
          Large
        </KitButton>
        <KitButton color="info" variant="solid" size="block">
          Block
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Default Button' }).className).toContain(
      'border-primary-500',
    )
    expect(screen.getByRole('button', { name: 'Round Button' }).className).toContain(
      'rounded-[40px]',
    )
    expect(screen.getByRole('button', { name: 'Simple Button' }).className).toContain(
      'rounded-none',
    )
    expect(screen.getByRole('button', { name: 'Get Started' }).className).toContain('bg-white')
    expect(screen.getByRole('button', { name: 'Large' }).className).toContain('text-[16px]')
    expect(screen.getByRole('button', { name: 'Block' }).className).toContain('w-full')
  })

  it('renders the 40px circular icon variant and passes className through', () => {
    render(
      <KitButton
        color="primary"
        variant="solid"
        size="md"
        circle
        aria-label="Heart button"
        className="extra"
      >
        icon
      </KitButton>,
    )

    const button = screen.getByRole('button', { name: 'Heart button' })
    expect(button.className).toContain('h-10')
    expect(button.className).toContain('w-10')
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('extra')
    expect(button).toHaveAttribute('type', 'button')
  })
})

describe('KitLink', () => {
  it('renders an anchor styled like a kit button', () => {
    render(
      <KitLink
        href="#buttons"
        color="primary"
        variant="outline"
        size="lg"
        className="border-white text-white"
      >
        See all components
      </KitLink>,
    )

    const link = screen.getByRole('link', { name: 'See all components' })
    expect(link).toHaveAttribute('href', '#buttons')
    expect(link.className).toContain('rounded')
    expect(link.className).toContain('border-white')
  })
})
