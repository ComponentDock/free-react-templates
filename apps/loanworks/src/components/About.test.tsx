import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    expect(screen.getByAltText('About Loanworks')).toBeInTheDocument()
  })

  it('renders benefit list items', () => {
    render(<About />)
    expect(screen.getByText('Loans with quick approval.')).toBeInTheDocument()
    expect(screen.getByText('We provide online instant cash loans.')).toBeInTheDocument()
  })

  it('renders the About Us button', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
})
