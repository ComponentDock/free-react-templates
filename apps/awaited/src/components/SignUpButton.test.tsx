import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignUpButton } from './SignUpButton'

describe('SignUpButton', () => {
  it('renders the white pill with its default sign-up call to action', () => {
    render(<SignUpButton />)

    const button = screen.getByTestId('sign-up')

    expect(button).toHaveTextContent('Notify Me')
    expect(button).toHaveAttribute('href', '#')
    expect(button).toHaveClass(
      'flex',
      'h-[50px]',
      'min-w-[140px]',
      'items-center',
      'justify-center',
      'rounded-pill',
      'bg-pill',
      'px-[15px]',
      'text-[18px]',
      'leading-[1.2]',
      'uppercase',
      'text-pill-label',
      'transition-all',
      'duration-[400ms]',
    )
  })

  it('inverts fill and label on hover', () => {
    render(<SignUpButton />)

    expect(screen.getByTestId('sign-up')).toHaveClass(
      'hover:bg-pill-hover',
      'hover:text-white',
      'focus-visible:ring-2',
    )
  })

  it('accepts its own label, target and layout overrides', () => {
    render(<SignUpButton label="Join the list" href="#list" className="mt-[10px]" />)

    const button = screen.getByTestId('sign-up')

    expect(button).toHaveTextContent('Join the list')
    expect(button).toHaveAttribute('href', '#list')
    expect(button).toHaveClass('mt-[10px]')
  })
})
