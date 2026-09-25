import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the greeting subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders the main heading with name', () => {
    render(<Hero />)
    expect(screen.getByText(/I'm/)).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('A Freelance Web Developer')).toBeInTheDocument()
  })

  it('renders the Hire me button', () => {
    render(<Hero />)
    expect(screen.getByText('Hire me')).toBeInTheDocument()
  })

  it('has a link to the contact section', () => {
    render(<Hero />)
    const hireLink = screen.getByText('Hire me').closest('a')
    expect(hireLink).toHaveAttribute('href', '#contact')
  })
})
