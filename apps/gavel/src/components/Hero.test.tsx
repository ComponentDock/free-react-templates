import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, headline, and supporting copy', () => {
    render(<Hero />)
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.description)).toBeInTheDocument()
  })

  it('renders both text-style call-to-action links', () => {
    render(<Hero />)
    const primary = screen.getByRole('link', { name: /Get Legal Advice/ })
    const secondary = screen.getByRole('link', { name: /Request A Quote/ })
    expect(primary).toHaveAttribute('href', '#contact')
    expect(secondary).toHaveAttribute('href', '#contact')
  })

  it('renders the background photo with a dark overlay', () => {
    const { container } = render(<Hero />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveAttribute('alt', '')
    expect(container.querySelector('.bg-black\\/50')).toBeInTheDocument()
  })
})
