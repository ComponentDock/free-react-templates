import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders welcome subtitle and heading', () => {
    render(<About />)
    expect(screen.getByText('Welcome to Colloquium')).toBeInTheDocument()
    expect(screen.getByText('We Make Your Event Memorable & Successful')).toBeInTheDocument()
  })

  it('renders experience badge', () => {
    render(<About />)
    expect(screen.getByText('20 Year of Experience')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About Colloquium')
    expect(img).toBeInTheDocument()
  })
})
