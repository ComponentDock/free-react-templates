import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the trust badge and headline with a blue-accented second line', () => {
    render(<Hero />)
    expect(screen.getByText('Trusted by 100,000+ Patients')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Your Health Is Our Top Priority/)
    expect(heading.querySelector('span')).toHaveTextContent('Top Priority')
  })

  it('renders the blurb and both CTA buttons', () => {
    render(<Hero />)
    expect(
      screen.getByText(
        /Experience compassionate, patient-centered healthcare with our team of expert physicians/,
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book Appointment/ })).toHaveAttribute(
      'href',
      '#booking',
    )
    expect(screen.getByRole('link', { name: /Emergency Line/ })).toHaveAttribute(
      'href',
      'tel:+15559110000',
    )
  })

  it('renders the trust row with avatars, stars and review stats', () => {
    render(<Hero />)
    expect(screen.getAllByRole('img', { name: /^Dr\./ }).length).toBe(3)
    expect(screen.getByText('50+ Doctors Board Certified')).toBeInTheDocument()
    expect(screen.getByLabelText('4.9 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByText('4.9/5 Rating')).toBeInTheDocument()
    expect(screen.getByText('2,500+ Reviews')).toBeInTheDocument()
  })

  it('renders the two floating cards over the photo', () => {
    render(<Hero />)
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Emergency Care')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
