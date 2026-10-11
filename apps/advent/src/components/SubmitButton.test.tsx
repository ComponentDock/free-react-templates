import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitButton } from './SubmitButton'

describe('SubmitButton', () => {
  it('renders the dark pill with its gradient hover overlay', () => {
    const { container } = render(<SubmitButton />)

    const button = screen.getByRole('button', { name: 'Get Updates' })

    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass(
      'group',
      'isolate',
      'relative',
      'mx-[10px]',
      'mb-[20px]',
      'h-[50px]',
      'w-[280px]',
      'max-w-[calc(100%_-_20px)]',
      'overflow-hidden',
      'rounded-pill',
      'bg-action',
      'px-5',
      'font-heading',
      'text-[15px]',
      'font-bold',
      'text-white',
      'hover:bg-transparent',
    )

    const overlay = container.querySelector('span')

    expect(overlay).toHaveClass(
      'absolute',
      'inset-0',
      '-z-10',
      'bg-accent-solid',
      'opacity-0',
      'group-hover:opacity-100',
      'transition-opacity',
      'duration-[400ms]',
    )
    expect(overlay?.className).toContain('linear-gradient(to_bottom')
  })

  it('accepts a className override', () => {
    render(<SubmitButton className="tracking-wide" />)

    expect(screen.getByRole('button', { name: 'Get Updates' })).toHaveClass('tracking-wide')
  })
})
