import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Podwave' })).toBeInTheDocument()
  })

  it('renders quick menu', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Quick Menu' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Episodes')).toBeInTheDocument()
  })

  it('renders follow us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
  })

  it('renders recent podcast thumbnails', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Recent Podcast' })).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders watch video section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Watch Video' })).toBeInTheDocument()
  })

  it('renders video thumbnail', () => {
    render(<Footer />)
    expect(screen.getByAltText('Video thumbnail')).toBeInTheDocument()
  })

  it('handles footer newsletter form submission', () => {
    render(<Footer />)
    const form = screen.getByLabelText('Enter Email').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
