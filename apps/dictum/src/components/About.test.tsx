import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section subtitle', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<About />)
    expect(screen.getByText('Welcome To Dictum')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the experience badge', () => {
    render(<About />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders the Our Services button', () => {
    render(<About />)
    const btn = screen.getByText('Our Services')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#services-section')
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Our office')).toBeInTheDocument()
  })
})
