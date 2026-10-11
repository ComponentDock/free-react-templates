import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationsShowcase } from './NavigationsShowcase'

describe('NavigationsShowcase', () => {
  it('renders seven nav variants with their brand accents', () => {
    const { container } = render(<NavigationsShowcase />)

    expect(container.querySelector('section')!.id).toBe('navigations')
    const navs = screen.getAllByRole('navigation')
    expect(navs).toHaveLength(7)

    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByText('Primary').className).toContain('text-primary-600')
    expect(screen.getByText('Success').className).toContain('text-success')
    expect(
      screen.getByRole('navigation', { name: 'Background image navigation' }).className,
    ).toContain('bg-heading')
    expect(screen.getByRole('navigation', { name: 'Info navigation' }).className).toContain(
      'justify-center',
    )
    expect(screen.getByRole('navigation', { name: 'Primary navigation' }).className).toContain(
      'justify-between',
    )
    expect(screen.getAllByRole('button', { name: /menu$/ })).toHaveLength(3)
  })

  it('toggles a preview dropdown', async () => {
    render(<NavigationsShowcase />)

    const trigger = screen.getByRole('button', { name: 'Success menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText('Dropdown header')).toHaveLength(1)

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Dropdown header')).not.toBeInTheDocument()
  })
})
