import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('see What we offer')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Services />)
    expect(screen.getByText('Amazing studio')).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Video Footages')).toBeInTheDocument()
    expect(screen.getByText('Photo Shootings')).toBeInTheDocument()
    expect(screen.getByText('Photo Albums')).toBeInTheDocument()
    expect(screen.getByText('Original Ideas')).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('has the services section id', () => {
    render(<Services />)
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'services')
  })

  it('renders service card content', () => {
    render(<Services />)
    expect(screen.getByText('Video Footages')).toBeInTheDocument()
    expect(screen.getByText('Photo Shootings')).toBeInTheDocument()
    expect(screen.getByText('Photo Albums')).toBeInTheDocument()
    expect(screen.getByText('Original Ideas')).toBeInTheDocument()
  })
})
