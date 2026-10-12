import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignUpPill } from './SignUpPill'

describe('SignUpPill', () => {
  it('is a transparent 25px pill with a hairline white border, never filled at rest', () => {
    render(<SignUpPill />)

    const pill = screen.getByTestId('signup-pill')

    expect(pill).toHaveClass(
      'min-w-[140px]',
      'h-[50px]',
      'border',
      'border-white',
      'rounded-[25px]',
      'bg-transparent',
      'px-[15px]',
    )
    expect(pill).not.toHaveClass('bg-white')
  })

  it('carries the uppercase semibold label and fills white on hover', () => {
    render(<SignUpPill />)

    const pill = screen.getByTestId('signup-pill')

    expect(pill).toHaveTextContent('Sign Up')
    expect(pill).toHaveClass(
      'uppercase',
      'text-[14px]',
      'font-semibold',
      'text-white',
      'hover:bg-white',
      'hover:text-hover-ink',
      'transition-all',
      'duration-[400ms]',
    )
  })

  it('accepts a className override on the wrapper', () => {
    render(<SignUpPill className="my-0" />)

    expect(screen.getByTestId('cta-wrap')).toHaveClass('my-0')
  })
})
