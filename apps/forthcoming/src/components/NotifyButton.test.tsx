import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NotifyButton } from './NotifyButton'

describe('NotifyButton', () => {
  it('renders the blue 160px-minimum pill that inverts on hover', () => {
    render(<NotifyButton />)

    const button = screen.getByRole('button', { name: 'Notify Me' })

    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass(
      'mx-[5px]',
      'mt-[20px]',
      'flex',
      'h-[50px]',
      'min-w-[160px]',
      'items-center',
      'justify-center',
      'rounded-[25px]',
      'bg-brand',
      'px-[20px]',
      'text-[15px]',
      'leading-[1.2]',
      'text-white',
      'transition-all',
      'duration-[400ms]',
      'hover:bg-white',
      'hover:text-brand',
    )
  })

  it('accepts a className override', () => {
    render(<NotifyButton className="mt-0" />)

    expect(screen.getByRole('button', { name: 'Notify Me' })).toHaveClass('mt-0')
  })
})
