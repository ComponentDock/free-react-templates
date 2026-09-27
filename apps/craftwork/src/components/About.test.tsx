import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<About />)
    expect(screen.getByText(/over a decade of experience/i)).toBeInTheDocument()
  })

  it('renders skill bars', () => {
    render(<About />)
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
  })

  it('renders personal info cards', () => {
    render(<About />)
    expect(screen.getByText('Birthday')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
  })
})
