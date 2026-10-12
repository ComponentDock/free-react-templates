import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SubmitButton } from './SubmitButton'

describe('SubmitButton', () => {
  it('fills the 80px lane at the right edge of the well with a paper-plane glyph', () => {
    render(<SubmitButton />)

    const button = screen.getByRole('button', { name: 'Submit email' })

    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass(
      'absolute',
      'top-0',
      'right-0',
      'flex',
      'h-full',
      'w-[80px]',
      'items-center',
      'justify-center',
      'bg-transparent',
      'text-white',
      'transition-all',
      'duration-[400ms]',
      'hover:bg-white/[0.12]',
    )
    expect(button.querySelector('svg')).not.toBeNull()
    // the lane never rounds its corners
    expect(button.className).not.toContain('rounded')
  })

  it('accepts layout overrides and submits the form it belongs to', () => {
    const { container } = render(
      <form>
        <SubmitButton className="w-[60px]" />
      </form>,
    )

    const button = screen.getByRole('button', { name: 'Submit email' })

    expect(button).toHaveClass('w-[60px]')
    expect(fireEvent.click(button)).toBe(true)
    expect(container.querySelector('form')).toContainElement(button)
  })
})
