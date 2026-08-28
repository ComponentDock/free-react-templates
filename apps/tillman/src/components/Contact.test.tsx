import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByText('Need any help?')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(screen.getByText('(10) 892-293 2678')).toBeInTheDocument()
    expect(screen.getByText('contact@tillman.com')).toBeInTheDocument()
    expect(screen.getByText('768/A, Green lane 790, Max town New York')).toBeInTheDocument()
  })

  it('renders the Drop Your Message button', () => {
    render(<Contact />)
    expect(screen.getByText('Drop Your Message')).toBeInTheDocument()
  })

  it('renders the section image', () => {
    render(<Contact />)
    expect(screen.getByAltText('Agricultural landscape')).toBeInTheDocument()
  })
})
