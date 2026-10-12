import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitArrow } from './SubmitArrow'

describe('SubmitArrow', () => {
  it('is an invisible 80×80 submit lane with its own accessible name', () => {
    render(<SubmitArrow />)

    const lane = screen.getByTestId('submit-arrow')

    expect(lane).toHaveAttribute('type', 'submit')
    expect(lane).toHaveAttribute('aria-label', 'Subscribe to the launch note')
    expect(lane).toHaveClass(
      'group/arrow',
      'absolute',
      'top-0',
      'right-0',
      'flex',
      'h-[80px]',
      'w-[80px]',
      'cursor-pointer',
      'items-center',
      'justify-center',
      'rounded-none',
      'border-0',
      'bg-transparent',
      'max-[576px]:w-[60px]',
    )

    const glyph = lane.querySelector('svg')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveClass(
      'size-[30px]',
      'text-ink',
      'transition-all',
      'duration-[400ms]',
      'group-hover/arrow:translate-x-[10px]',
    )
  })

  it('accepts layout overrides', () => {
    render(<SubmitArrow className="w-0" />)

    expect(screen.getByTestId('submit-arrow')).toHaveClass('w-0')
  })
})
