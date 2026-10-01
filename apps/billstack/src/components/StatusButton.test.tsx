import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusButton } from './StatusButton'

describe('StatusButton', () => {
  it('renders a real button element with the status label as its accessible name', () => {
    render(<StatusButton variant="success" label="Progress" />)
    const button = screen.getByRole('button', { name: 'Progress' })
    expect(button).toHaveAttribute('type', 'button')
  })

  it('applies the success variant styling (white on green, dark-green hover)', () => {
    render(<StatusButton variant="success" label="Progress" />)
    const button = screen.getByRole('button', { name: 'Progress' })
    expect(button.className).toContain('border-success')
    expect(button.className).toContain('bg-success')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('hover:bg-success-hover')
    expect(button.className).toContain('hover:border-[#1e7e34]')
    expect(button.className).toContain('focus-visible:ring-[rgba(72,180,97,0.5)]')
  })

  it('applies the warning variant styling (dark text on amber, darker-amber hover)', () => {
    render(<StatusButton variant="warning" label="Open" />)
    const button = screen.getByRole('button', { name: 'Open' })
    expect(button.className).toContain('border-warning')
    expect(button.className).toContain('bg-warning')
    expect(button.className).toContain('text-cell')
    expect(button.className).toContain('hover:bg-warning-hover')
    expect(button.className).toContain('hover:border-[#d39e00]')
    expect(button.className).toContain('focus-visible:ring-[rgba(222,170,12,0.5)]')
  })

  it('applies the danger variant styling (white on red, darker-red hover)', () => {
    render(<StatusButton variant="danger" label="On hold" />)
    const button = screen.getByRole('button', { name: 'On hold' })
    expect(button.className).toContain('border-danger')
    expect(button.className).toContain('bg-danger')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('hover:bg-danger-hover')
    expect(button.className).toContain('hover:border-[#bd2130]')
    expect(button.className).toContain('focus-visible:ring-[rgba(225,83,97,0.5)]')
  })

  it('shares the Bootstrap base button geometry across variants', () => {
    render(<StatusButton variant="success" label="Progress" />)
    const button = screen.getByRole('button', { name: 'Progress' })
    expect(button.className).toContain('rounded-[0.25rem]')
    expect(button.className).toContain('border')
    expect(button.className).toContain('px-[0.75rem]')
    expect(button.className).toContain('py-[0.375rem]')
    expect(button.className).toContain('text-base')
    expect(button.className).toContain('font-normal')
    expect(button.className).toContain('leading-[1.5]')
    expect(button.className).toContain('transition-all')
    expect(button.className).toContain('duration-150')
    expect(button.className).toContain('ease-in-out')
    expect(button.className).toContain('motion-reduce:transition-none')
    expect(button.className).toContain('focus-visible:ring-2')
  })
})
