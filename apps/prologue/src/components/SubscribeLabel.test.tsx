import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubscribeLabel } from './SubscribeLabel'

describe('SubscribeLabel', () => {
  it("marks the bar's left end with a 5px rule and its corrected caption", () => {
    render(<SubscribeLabel htmlFor="prologue-email" />)

    const tab = screen.getByTestId('subscribe-label')

    expect(tab.tagName).toBe('LABEL')
    expect(tab).toHaveAttribute('for', 'prologue-email')
    expect(tab).toHaveClass(
      'absolute',
      'top-0',
      'left-0',
      'flex',
      'h-[80px]',
      'w-[172px]',
      'items-center',
      'justify-center',
      'rounded-none',
      'border-l-[5px]',
      'border-l-ink',
      'bg-transparent',
      'max-[576px]:w-[5px]',
    )

    const caption = screen.getByTestId('subscribe-label-caption')

    expect(caption).toHaveTextContent('Subscribe Now:')
    expect(caption).toHaveClass(
      'font-sans',
      'text-[15px]',
      'leading-[1.2]',
      'font-medium',
      'text-ink',
      'max-[576px]:sr-only',
    )
  })

  it('takes its own caption and layout overrides', () => {
    render(<SubscribeLabel htmlFor="other" caption="Notify me:" className="w-0" />)

    expect(screen.getByTestId('subscribe-label-caption')).toHaveTextContent('Notify me:')
    expect(screen.getByTestId('subscribe-label')).toHaveClass('w-0')
  })
})
