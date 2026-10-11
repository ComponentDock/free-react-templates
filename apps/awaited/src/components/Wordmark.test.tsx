import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('sets the template name in white type, in a growing container', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: 'Awaited' })

    expect(link).toHaveTextContent('Awaited')
    expect(link).toHaveClass(
      'font-heading',
      'text-[28px]',
      'leading-[1.2]',
      'font-black',
      'tracking-[0.18em]',
      'text-white',
      'uppercase',
      'transition-opacity',
      'duration-[400ms]',
      'hover:opacity-80',
    )
    expect(link.parentElement).toHaveClass('my-[10px]', 'mr-[30px]', 'grow')
  })

  it('accepts layout overrides', () => {
    render(<Wordmark className="order-2" />)

    expect(screen.getByRole('link', { name: 'Awaited' }).parentElement).toHaveClass('order-2')
  })
})
