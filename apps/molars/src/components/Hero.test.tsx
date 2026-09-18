import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Dental Clinic for Everyone',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Quality dental care for the whole family/)).toBeInTheDocument()
  })

  it('shows two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Check Out Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('has a play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Play introduction video' })).toBeInTheDocument()
  })

  it('CTA links have correct hrefs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Check Out Our Services' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#about')
  })
})
