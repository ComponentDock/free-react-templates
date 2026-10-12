import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitLane } from './SubmitLane'

describe('SubmitLane', () => {
  it('is an invisible 35px lane pinned to the field top-right corner', () => {
    render(<SubmitLane />)

    const lane = screen.getByTestId('submit-lane')

    expect(lane).toHaveClass(
      'absolute',
      'top-0',
      'right-0',
      'h-full',
      'w-[35px]',
      'flex',
      'items-center',
      'justify-center',
      'border-0',
      'bg-transparent',
    )
    expect(lane.className).not.toContain('rounded-')
  })

  it('centres a 16px muted arrow that turns white on hover', () => {
    render(<SubmitLane />)

    const lane = screen.getByTestId('submit-lane')

    expect(lane).toHaveClass('group/submit')

    const arrow = lane.querySelector('svg')

    expect(arrow).toHaveClass(
      'size-[16px]',
      'text-muted',
      'transition-all',
      'duration-[400ms]',
      'group-hover/submit:text-white',
    )
  })

  it('submits the form and carries its own accessible name', () => {
    render(<SubmitLane />)

    const lane = screen.getByRole('button', { name: 'Submit email' })

    expect(lane).toHaveAttribute('type', 'submit')
  })

  it('accepts a className override', () => {
    render(<SubmitLane className="w-0" />)

    expect(screen.getByTestId('submit-lane')).toHaveClass('w-0')
  })
})
