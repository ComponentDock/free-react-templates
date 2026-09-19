import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('We Care About Your Teeth')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Donec malesuada lorem maximus/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Dental clinic interior')).toBeInTheDocument()
  })

  it('renders the awards image', () => {
    render(<About />)
    expect(screen.getByAltText('Awards and certifications')).toBeInTheDocument()
  })
})
