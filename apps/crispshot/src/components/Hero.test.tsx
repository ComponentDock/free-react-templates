import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hello/)
  })

  it('renders the paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/I photograph very instinctively/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<Hero />)
    expect(screen.getByText('hello.crispshot@gmail.com')).toHaveAttribute(
      'href',
      'mailto:hello.crispshot@gmail.com',
    )
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByRole('presentation')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
