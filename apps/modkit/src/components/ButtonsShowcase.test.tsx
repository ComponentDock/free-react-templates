import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonsShowcase } from './ButtonsShowcase'

describe('ButtonsShowcase', () => {
  it('renders the example, outline, pill, and size groups', () => {
    render(<ButtonsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Buttons')
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'With Icon' })).toBeInTheDocument()

    expect(screen.getAllByRole('button', { name: 'Default' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Secondary' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Info' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Danger' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Warning' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Success' })).toHaveLength(3)

    expect(screen.getByRole('heading', { level: 4, name: 'Button outline' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Button Pill' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Sizes' })).toBeInTheDocument()
  })

  it('renders the three sizes with distinct label sizes and pill radius', () => {
    render(<ButtonsShowcase />)

    const small = screen.getByRole('button', { name: 'Small' })
    const medium = screen.getByRole('button', { name: 'Medium' })
    const large = screen.getByRole('button', { name: 'Large' })

    expect(small.className).toContain('text-[0.75rem]')
    expect(medium.className).toContain('text-[0.875rem]')
    expect(large.className).toContain('text-[1rem]')

    const pills = screen.getAllByRole('button', { name: 'Default' })
    expect(pills[2]!.className).toContain('rounded-full')
    expect(pills[0]!.className).toContain('rounded')
  })
})
