import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonsShowcase } from './ButtonsShowcase'

describe('ButtonsShowcase', () => {
  it('renders the five button treatments and the circular icon action', () => {
    render(<ButtonsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Buttons' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Default Button' }).className).toContain(
      'border-primary-500',
    )
    expect(screen.getByRole('button', { name: 'Filled Button' }).className).toContain(
      'bg-primary-500',
    )
    expect(screen.getByRole('button', { name: 'Round Button' }).className).toContain(
      'rounded-[40px]',
    )
    expect(screen.getByRole('button', { name: 'Button With Icon' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Simple Button' }).className).toContain(
      'rounded-none',
    )

    const circle = screen.getByRole('button', { name: 'Heart button' })
    expect(circle.className).toContain('h-10')
    expect(circle.className).toContain('w-10')
  })

  it('renders the seven colored text links', () => {
    render(<ButtonsShowcase />)

    const colors = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Dark']
    for (const color of colors) {
      expect(screen.getByRole('button', { name: `${color} link` })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Primary link' }).className).toContain(
      'text-primary-500',
    )
    expect(screen.getByRole('button', { name: 'Dark link' }).className).toContain('text-heading')
  })
})
