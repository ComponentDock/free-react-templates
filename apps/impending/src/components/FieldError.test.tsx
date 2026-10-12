import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FieldError } from './FieldError'

describe('FieldError', () => {
  it('anchors the square white bubble beside its warning glyph', () => {
    render(<FieldError id="impending-email-error" message="Please enter a valid email address" />)

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveAttribute('id', 'impending-email-error')
    expect(bubble).toHaveTextContent('Please enter a valid email address')
    expect(bubble).toHaveClass(
      'pointer-events-none',
      'invisible',
      'absolute',
      'top-1/2',
      'right-[82px]',
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
      'text-error',
      'opacity-0',
      'transition-opacity',
      'duration-[400ms]',
      'group-hover:visible',
      'group-hover:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )

    const glyph = document.querySelector('svg.text-error')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveClass(
      'absolute',
      'top-1/2',
      'right-[88px]',
      'size-[14px]',
      '-translate-y-1/2',
    )
  })

  it('accepts layout overrides and works without an id', () => {
    render(<FieldError message="Nope" className="right-[10px]" />)

    const bubble = screen.getByRole('alert')

    expect(bubble).not.toHaveAttribute('id')
    expect(bubble).toHaveClass('right-[10px]')
  })
})
