import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders section title', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByText('simply amazing places')).toBeInTheDocument()
  })

  it('renders all card titles', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Fast Services')).toBeInTheDocument()
    expect(screen.getByText('Expert Guides')).toBeInTheDocument()
    expect(screen.getByText('Best Deals')).toBeInTheDocument()
  })

  it('renders card descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Quick and efficient/)).toBeInTheDocument()
    expect(screen.getByText(/Knowledgeable local/)).toBeInTheDocument()
    expect(screen.getByText(/Unbeatable prices/)).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<WhyChooseUs />)
    expect(screen.getByAltText('Fast Services feature')).toBeInTheDocument()
    expect(screen.getByAltText('Expert Guides feature')).toBeInTheDocument()
    expect(screen.getByAltText('Best Deals feature')).toBeInTheDocument()
  })
})
