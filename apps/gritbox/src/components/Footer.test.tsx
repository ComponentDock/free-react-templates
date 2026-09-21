import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand logo', () => {
    render(<Footer />)
    expect(screen.getByText('Grit')).toBeInTheDocument()
    expect(screen.getByText('Box')).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<Footer />)
    expect(screen.getByText(/premier crossfit and gym facility/)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Footer />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })

  it('renders Quick Menu links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Menu')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Our Trainers')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })

  it('renders Program links', () => {
    render(<Footer />)
    expect(screen.getByText('Program')).toBeInTheDocument()
    expect(screen.getByText('Body Building')).toBeInTheDocument()
    expect(screen.getByText('Morning Energy')).toBeInTheDocument()
    expect(screen.getByText('Stretching')).toBeInTheDocument()
    expect(screen.getByText('Weight Lifting')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('has an id of footer on the section', () => {
    render(<Footer />)
    expect(document.getElementById('footer')).toBeTruthy()
  })
})
