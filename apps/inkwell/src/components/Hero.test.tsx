import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the label, giant wordmark and tagline', () => {
    const { container } = render(<Hero />)
    expect(screen.getByText(/A Personal Blog/)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Inkwell.')
    expect(container.querySelector('h1 span')).toBeInTheDocument()
    expect(
      screen.getByText('I am a Blogger & Photographer Based in Philippines'),
    ).toBeInTheDocument()
  })

  it('right-aligns the text block inside the container', () => {
    const { container } = render(<Hero />)
    const textBlock = container.querySelector('.max-w-3xl')
    expect(textBlock?.parentElement).toHaveClass('justify-end')
  })
})
