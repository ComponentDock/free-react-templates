import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders all reason cards', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Quality Guarantee')).toBeInTheDocument()
    expect(screen.getByText('Fast Service')).toBeInTheDocument()
    expect(screen.getByText('Award Winning')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/commitment to using only the finest/)).toBeInTheDocument()
    expect(screen.getByText(/efficient kitchen and attentive staff/)).toBeInTheDocument()
    expect(screen.getByText(/Recognized by top culinary critics/)).toBeInTheDocument()
  })
})
