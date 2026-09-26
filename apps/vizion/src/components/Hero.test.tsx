import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello This is Vizion')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('has correct social link hrefs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', '#')
  })

  it('has the home section id', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })
})
