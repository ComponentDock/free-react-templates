import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline text', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/creative/)
  })

  it('renders "More About Us" CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'More About Us' })).toHaveAttribute('href', '#about')
  })

  it('renders "Play Video" link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
    expect(screen.getByText('Play Video')).toBeInTheDocument()
  })

  it('renders "Scroll" link', () => {
    render(<Hero />)
    expect(screen.getByText('Scroll')).toHaveAttribute('href', '#about')
  })

  it('renders social sidebar with all 5 links', () => {
    render(<Hero />)
    const socialNav = screen.getByRole('navigation', { name: 'Social links' })
    const socialLinks = socialNav.querySelectorAll('a')
    expect(socialLinks.length).toBe(5)
    const labels = ['Facebook', 'Twitter', 'Instagram', 'Behance', 'Dribbble']
    for (const label of labels) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
