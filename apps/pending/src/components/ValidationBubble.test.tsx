import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ValidationBubble } from './ValidationBubble'
import { EMAIL_MESSAGE } from '../lib/validation'

describe('ValidationBubble', () => {
  it('is a square white alert outlined in red, vertically centred 32px from the edge', () => {
    render(<ValidationBubble id="pending-email-error" message={EMAIL_MESSAGE} />)

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveAttribute('id', 'pending-email-error')
    expect(bubble).toHaveTextContent('Please enter a valid email address')
    expect(bubble.tagName).toBe('SPAN')
    expect(bubble).toHaveClass(
      'pointer-events-none',
      'absolute',
      'top-1/2',
      'right-[32px]',
      'max-w-[70%]',
      '-translate-y-1/2',
      'rounded-none',
      'border',
      'border-error',
      'bg-white',
      'py-[4px]',
      'pr-[25px]',
      'pl-[10px]',
      'text-[14px]',
      'leading-[1.4]',
      'text-error',
      'opacity-0',
      'transition-opacity',
      'duration-[400ms]',
    )
  })

  it('is revealed on hover above 992px and always readable below it', () => {
    render(<ValidationBubble id="pending-email-error" message={EMAIL_MESSAGE} />)

    const bubble = screen.getByRole('alert')

    expect(bubble).toHaveClass(
      'invisible',
      'group-hover/well:visible',
      'group-hover/well:opacity-100',
      'max-[992px]:visible',
      'max-[992px]:opacity-100',
    )
  })

  it('pairs the message with a 14px red warning glyph 38px from the edge', () => {
    const { container } = render(
      <ValidationBubble id="pending-email-error" message={EMAIL_MESSAGE} />,
    )

    const glyph = container.querySelector('svg')

    expect(glyph).toHaveClass(
      'absolute',
      'top-1/2',
      'right-[38px]',
      'size-[14px]',
      '-translate-y-1/2',
      'text-error',
    )
    expect(glyph).toHaveAttribute('aria-hidden', 'true')
  })

  it('works without an id and accepts a className override', () => {
    render(<ValidationBubble message="Something else" className="right-0" />)

    const bubble = screen.getByRole('alert')

    expect(bubble).not.toHaveAttribute('id')
    expect(bubble).toHaveTextContent('Something else')
    expect(bubble).toHaveClass('right-0')
  })
})
