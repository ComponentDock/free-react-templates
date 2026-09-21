import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText("Don't Feel Helpless We Fight for Justice")).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })

  it('has a background image with overlay', () => {
    render(<Hero />)
    const section = document.querySelector('section')!
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('linear-gradient') })
  })
})
