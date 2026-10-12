import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { ABOUT_SLIDES, SLIDE_NEXT, SLIDE_PREV } from '../lib/site'

const heading = () => screen.getByRole('heading', { level: 2 })

describe('About', () => {
  it('opens on the bride slide with its portrait and the thin heading the design sets', () => {
    render(<About />)

    expect(heading().textContent).toBe('About the Sweet Bride')
    expect(heading()).toHaveClass('font-thin')
    expect(screen.getByText('Bride')).toHaveClass('font-semibold')
    expect(screen.getByRole('img')).toHaveAttribute('src', ABOUT_SLIDES[0]?.src)
    expect(screen.getByRole('img')).toHaveAttribute('alt', ABOUT_SLIDES[0]?.alt)
    expect(screen.getByTestId('about-counter')).toHaveTextContent('1 / 2')
  })

  it('steps forward to the groom, wraps back to the bride and steps back again', () => {
    render(<About />)

    fireEvent.click(screen.getByRole('button', { name: SLIDE_NEXT }))

    expect(heading().textContent).toBe('About the Handsome Groom')
    expect(screen.getByTestId('about-counter')).toHaveTextContent('2 / 2')
    expect(screen.getByRole('img')).toHaveAttribute('src', ABOUT_SLIDES[1]?.src)

    fireEvent.click(screen.getByRole('button', { name: SLIDE_NEXT }))

    expect(heading().textContent).toBe('About the Sweet Bride')

    fireEvent.click(screen.getByRole('button', { name: SLIDE_PREV }))

    expect(heading().textContent).toBe('About the Handsome Groom')
    expect(screen.getByTestId('about-counter')).toHaveTextContent('2 / 2')
  })
})
