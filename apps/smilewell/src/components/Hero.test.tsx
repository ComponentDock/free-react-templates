import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Smilewell')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Care For Your Smile')
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/committed to providing/)).toBeInTheDocument()
  })

  it('renders the Contact Us button linking to contact', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: 'Contact Us' })
    expect(btn).toHaveAttribute('href', '#contact')
  })

  it('renders the dental image with alt text', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /dental care professional/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
