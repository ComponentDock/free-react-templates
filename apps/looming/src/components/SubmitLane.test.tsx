import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitLane } from './SubmitLane'

describe('SubmitLane', () => {
  it('anchors an invisible 90×80 lane holding a 30px arrow at the well’s top-right', () => {
    render(<SubmitLane />)

    const lane = screen.getByRole('button', { name: 'Submit email' })

    expect(lane).toHaveAttribute('type', 'submit')
    expect(lane).toHaveClass(
      'group/submit',
      'absolute',
      'top-0',
      'right-0',
      'h-[80px]',
      'w-[90px]',
      'flex',
      'items-center',
      'justify-center',
      'border-0',
      'bg-transparent',
    )

    const arrow = lane.querySelector('svg')

    expect(arrow).not.toBeNull()
    expect(arrow).toHaveAttribute('aria-hidden', 'true')
    expect(arrow).toHaveClass(
      'size-[30px]',
      'text-ink',
      'transition-transform',
      'duration-[400ms]',
      'group-hover/submit:translate-x-[10px]',
    )
  })

  it('accepts layout overrides', () => {
    render(<SubmitLane className="w-[70px]" />)

    expect(screen.getByTestId('submit-lane')).toHaveClass('w-[70px]')
  })
})
