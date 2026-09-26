import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and bio', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText(/Hi! I'm Echo/)).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('renders the resume link', () => {
    render(<About />)
    expect(screen.getByText('Checkout my resume')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<About />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<About />)
    expect(screen.getByText('Contact me here!')).toBeInTheDocument()
    expect(screen.getByText('echo@email.com')).toBeInTheDocument()
    expect(screen.getByText('(123)-456-789')).toBeInTheDocument()
  })
})
