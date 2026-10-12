import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ValidationBubble } from './ValidationBubble'

describe('ValidationBubble', () => {
  it("renders the flat white box outlined in red, pinned 72px from the bar's right", () => {
    render(<ValidationBubble id="prologue-email-error" message="Enter a valid email address" />)

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveAttribute('id', 'prologue-email-error')
    expect(bubble).toHaveTextContent('Enter a valid email address')
    expect(bubble).toHaveClass(
      'pointer-events-none',
      'invisible',
      'absolute',
      'top-1/2',
      'right-[72px]',
      'max-w-[70%]',
      '-translate-y-1/2',
      'rounded-none',
      'border',
      'border-error',
      'bg-white',
      'py-[4px]',
      'pr-[25px]',
      'pl-[10px]',
      'text-left',
      'font-sans',
      'text-[14px]',
      'leading-[1.4]',
      'font-medium',
      'text-error',
      'opacity-0',
      'transition-opacity',
      'duration-[400ms]',
      'group-hover/track:visible',
      'group-hover/track:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )

    const glyph = document.querySelector('svg.text-error')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveClass(
      'absolute',
      'top-1/2',
      'right-[78px]',
      'size-[14px]',
      '-translate-y-1/2',
    )
  })

  it('works without an id and accepts layout overrides', () => {
    render(<ValidationBubble message="Nope" className="right-[10px]" />)

    const bubble = screen.getByRole('alert')

    expect(bubble).not.toHaveAttribute('id')
    expect(bubble).toHaveClass('right-[10px]')
  })
})
