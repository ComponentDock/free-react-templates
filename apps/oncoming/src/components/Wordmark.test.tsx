import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('sets the app own name in white uppercase with wide tracking, in a growing container', () => {
    render(<Wordmark />)

    const mark = screen.getByTestId('wordmark')

    expect(mark).toHaveTextContent('Oncoming')
    expect(mark).toHaveClass('text-[20px]', 'leading-none', 'tracking-[0.34em]', 'uppercase')
    expect(mark).toHaveAttribute('aria-hidden', 'true')
    // the mark is the app's own wordmark — no image asset is used
    expect(screen.queryByRole('img')).toBeNull()

    const link = screen.getByRole('link', { name: 'Oncoming' })

    expect(link).toHaveAttribute('href', '#')
    expect(link).toHaveClass('text-white', 'transition-opacity', 'duration-[400ms]')
    expect(link.parentElement).toHaveClass('my-[10px]', 'mr-[30px]', 'grow')
  })

  it('accepts layout overrides', () => {
    render(<Wordmark className="grow-0" />)

    expect(screen.getByRole('link', { name: 'Oncoming' }).parentElement).toHaveClass('grow-0')
  })
})
