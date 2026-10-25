import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddButton } from './AddButton'

describe('AddButton', () => {
  it('is an ink button with a plus and the add label', () => {
    render(<AddButton added={false} product="Canvas Market Tote" onToggle={() => {}} />)
    const button = screen.getByRole('button', { name: 'Add to bag' })

    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button).toHaveClass('bg-ink', 'border-ink', 'text-white', 'rounded-[12px]', 'border-[1.5px]')
    expect(button).toHaveClass('mx-[18px]', 'mb-[18px]', 'mt-[14px]')
    expect(button.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('flips to the pale lime added state with a popping tick', () => {
    render(<AddButton added product="Canvas Market Tote" onToggle={() => {}} />)
    const button = screen.getByRole('button', { name: 'Added to bag' })

    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button).toHaveClass('bg-ok-soft', 'border-ok', 'text-ok', 'hover:bg-ok-hover')
    expect(button).not.toHaveClass('bg-ink')
    expect(button.querySelector('svg')).toHaveClass('tick-pop')
  })

  it('hands its own product name back to the toggle', () => {
    const onToggle = vi.fn()
    render(<AddButton added={false} product="Meridian Leather Watch" onToggle={onToggle} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onToggle).toHaveBeenCalledWith('Meridian Leather Watch')
  })

  it('keeps a 3px grey focus ring and a press-down active state', () => {
    render(<AddButton added={false} product="Canvas Market Tote" onToggle={() => {}} />)

    expect(screen.getByRole('button')).toHaveClass(
      'focus-visible:outline-[3px]',
      'focus-visible:outline-offset-2',
      'focus-visible:outline-ring',
      'active:scale-[0.98]',
    )
  })
})
