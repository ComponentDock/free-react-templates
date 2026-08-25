import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the subheading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Orbiter?')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<WhyChooseUs />)
    expect(
      screen.getByText(/You still thinking about why you should choose us/),
    ).toBeInTheDocument()
  })

  it('renders the years of experience stat', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
  })

  it('renders the team members stat', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('34')).toBeInTheDocument()
    expect(screen.getByText('Team members')).toBeInTheDocument()
  })

  it('renders the Why Orbiter button', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('button', { name: /why orbiter/i })).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Branding & Identity')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/We have over a decade/)).toBeInTheDocument()
  })
})
