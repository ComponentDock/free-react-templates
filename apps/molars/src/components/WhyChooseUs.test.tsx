import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Why/)).toBeInTheDocument()
    expect(screen.getByText(/Choose us/)).toBeInTheDocument()
  })

  it('renders three feature rows', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Fast Support')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('each feature has a description', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Quick response times/)).toBeInTheDocument()
    expect(screen.getByText(/Thousands of satisfied patients/)).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock emergency/)).toBeInTheDocument()
  })

  it('displays the clinic image', () => {
    render(<WhyChooseUs />)
    expect(screen.getByAltText('Modern dental clinic')).toBeInTheDocument()
  })
})
