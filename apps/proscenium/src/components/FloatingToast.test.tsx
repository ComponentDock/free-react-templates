import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FloatingToast } from './FloatingToast'
import { TOAST } from '../data/hero'

describe('FloatingToast', () => {
  it('is decorative and carries both lines of the payment notice', () => {
    const { container } = render(<FloatingToast />)
    const toast = container.firstElementChild as HTMLElement

    expect(toast).toHaveAttribute('aria-hidden', 'true')
    expect(toast).toHaveClass('hero-toast')
    expect(screen.getByText(TOAST.title).tagName).toBe('STRONG')
    expect(screen.getByText(TOAST.detail)).toHaveClass('text-[12.5px]', 'text-muted')
  })

  it('leads with a 34 px success tile', () => {
    const { container } = render(<FloatingToast />)
    const tile = container.querySelector('span.bg-success')

    expect(tile).toHaveClass('h-[34px]', 'w-[34px]', 'rounded-[10px]', 'text-white')
    expect(tile?.querySelector('svg')).not.toBeNull()
  })
})
