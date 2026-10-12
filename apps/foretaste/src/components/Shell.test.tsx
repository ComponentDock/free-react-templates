import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SKYLINE_SRC, Shell } from './Shell'

describe('Shell', () => {
  it('lays one cover photograph across a full-height shell', () => {
    render(<Shell>band</Shell>)

    const shell = screen.getByTestId('shell')

    expect(shell).toHaveClass(
      'relative',
      'z-[1]',
      'w-full',
      'min-h-screen',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
      'px-[15px]',
      'pb-[35px]',
    )
    expect(shell.getAttribute('style')).toContain(SKYLINE_SRC)
    expect(screen.getByText('band')).toBeInTheDocument()
  })

  it('stands in its own deterministic placeholder photo', () => {
    expect(SKYLINE_SRC).toBe('https://picsum.photos/seed/foretaste-skyline/1900/900')
  })

  it('washes the photo with the brand gradient at 80% opacity', () => {
    render(<Shell>band</Shell>)

    const wash = screen.getByTestId('wash')

    expect(wash).toHaveAttribute('aria-hidden', 'true')
    expect(wash).toHaveClass(
      'absolute',
      'inset-0',
      '-z-10',
      'bg-linear-to-b',
      'from-brand-from',
      'to-brand-to',
      'opacity-80',
    )
  })

  it('accepts layout overrides', () => {
    render(<Shell className="text-center">band</Shell>)

    expect(screen.getByTestId('shell')).toHaveClass('text-center')
  })
})
