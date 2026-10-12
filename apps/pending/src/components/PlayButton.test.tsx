import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PlayButton } from './PlayButton'

describe('PlayButton', () => {
  it('is a 60×60 circle carrying a full-size white disc behind the glyph', () => {
    render(<PlayButton />)

    const button = screen.getByTestId('play-button')

    expect(button).toHaveClass(
      'size-[60px]',
      'rounded-full',
      'bg-transparent',
      'text-ink',
      'relative',
      'z-[1]',
      'transition-all',
      'duration-[400ms]',
    )
    expect(button).toHaveClass(
      'after:absolute',
      'after:inset-0',
      'after:z-[-1]',
      'after:rounded-full',
      'after:bg-white',
    )
  })

  it('drops the disc to 60% and scales it to 125% on hover', () => {
    render(<PlayButton />)

    const button = screen.getByTestId('play-button')

    expect(button).toHaveClass('hover:after:scale-125', 'hover:after:opacity-60')
    expect(button).toHaveClass('motion-reduce:after:transition-none')
  })

  it('is decorative: a labelled button that is never wired to anything', () => {
    render(<PlayButton />)

    const button = screen.getByRole('button', { name: 'Play the background film' })
    const before = window.location.href

    expect(button).toHaveAttribute('type', 'button')
    expect(fireEvent.click(button)).toBe(true)
    expect(window.location.href).toBe(before)
  })

  it('accepts a className override', () => {
    render(<PlayButton className="size-8" />)

    expect(screen.getByTestId('play-button')).toHaveClass('size-8')
  })
})
