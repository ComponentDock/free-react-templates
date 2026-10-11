import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { COLOR_LABELS, KIT_COLORS, KitButton, KitLink, OUTLINE_COLORS } from './KitButton'

describe('KitButton', () => {
  it('renders a solid button with the brand fill and its soft shadow', () => {
    render(
      <KitButton color="primary" variant="solid" size="md">
        Default
      </KitButton>,
    )

    const button = screen.getByRole('button', { name: 'Default' })

    expect(button).toHaveAttribute('type', 'button')
    expect(button.className).toContain('bg-flair-primary')
    expect(button.className).toContain('shadow-btn-primary')
    expect(button.className).toContain('rounded')
  })

  it('renders the pill and fab shapes', () => {
    render(
      <>
        <KitButton color="primary" variant="solid" size="md" pill>
          Rounded
        </KitButton>
        <KitButton color="primary" variant="solid" size="lg" fab aria-label="Favourite" />
      </>,
    )

    expect(screen.getByRole('button', { name: 'Rounded' }).className).toContain('rounded-full')
    expect(screen.getByRole('button', { name: 'Favourite' }).className).toContain('h-8 w-8')
  })

  it('renders every size with the reference font scale', () => {
    render(
      <>
        <KitButton color="primary" variant="solid" size="sm">
          Small
        </KitButton>
        <KitButton color="primary" variant="solid" size="md">
          Regular
        </KitButton>
        <KitButton color="primary" variant="solid" size="lg">
          Large
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Small' }).className).toContain('text-[12px]')
    expect(screen.getByRole('button', { name: 'Regular' }).className).toContain('text-[14px]')
    expect(screen.getByRole('button', { name: 'Large' }).className).toContain('text-[16px]')
  })

  it('renders outlined and thick-outlined variants', () => {
    render(
      <>
        <KitButton color="info" variant="outline" size="md">
          Outline
        </KitButton>
        <KitButton color="danger" variant="outline-2" size="md">
          Outline 2
        </KitButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Outline' }).className).toContain('border-flair-info')
    expect(screen.getByRole('button', { name: 'Outline 2' }).className).toContain('border-2')
    expect(screen.getByRole('button', { name: 'Outline 2' }).className).toContain(
      'border-flair-danger',
    )
  })

  it('exposes the reference palette and its eight outline colors', () => {
    expect(KIT_COLORS).toEqual([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'link',
    ])
    expect(OUTLINE_COLORS).toHaveLength(8)
    expect(COLOR_LABELS.link).toBe('Link')
    expect(COLOR_LABELS.dark).toBe('Dark')
  })
})

describe('KitLink', () => {
  it('renders an anchor styled like the button', () => {
    render(
      <KitLink href="#start" color="primary" variant="solid" size="md">
        View All Here
      </KitLink>,
    )

    const link = screen.getByRole('link', { name: 'View All Here' })

    expect(link).toHaveAttribute('href', '#start')
    expect(link.className).toContain('bg-flair-primary')
  })
})
