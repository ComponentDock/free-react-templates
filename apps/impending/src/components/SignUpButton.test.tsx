import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignUpButton } from './SignUpButton'

describe('SignUpButton', () => {
  it('renders the white pill with an italic-serif sentence-case label', () => {
    render(<SignUpButton />)

    const pill = screen.getByTestId('sign-up')

    expect(pill.tagName).toBe('A')
    expect(pill).toHaveAttribute('href', '#')
    expect(pill).toHaveTextContent('Get Notified')
    expect(pill).toHaveClass(
      'flex',
      'h-[50px]',
      'min-w-[140px]',
      'items-center',
      'justify-center',
      'rounded-pill',
      'bg-pill',
      'px-[15px]',
      'font-heading',
      'text-[18px]',
      'leading-[1.2]',
      'text-pill-label',
      'italic',
      'transition-all',
      'duration-[400ms]',
      'hover:bg-pill-hover',
      'hover:text-white',
    )
    expect(pill).not.toHaveClass('uppercase')
  })

  it('accepts its own label, target and layout overrides', () => {
    render(<SignUpButton label="Keep me posted" href="#signup" className="ml-[10px]" />)

    const pill = screen.getByTestId('sign-up')

    expect(pill).toHaveTextContent('Keep me posted')
    expect(pill).toHaveAttribute('href', '#signup')
    expect(pill).toHaveClass('ml-[10px]')
  })
})
