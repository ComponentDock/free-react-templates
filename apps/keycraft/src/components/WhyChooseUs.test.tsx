import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('heading', { level: 2, name: /Why choose us/ })).toBeInTheDocument()
  })

  it('renders all checklist items', () => {
    render(<WhyChooseUs />)

    const items = [
      'Safes & Safe Deposit Boxes',
      'Car Locksmith & Car Alarm Systems',
      'Residential & Commercial Locksmith',
      'We Are Awesome People To Meet',
      'Digital & Electronic Lock',
    ]

    for (const item of items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('renders the CTA button', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('link', { name: 'Get a quote' })).toBeInTheDocument()
  })

  it('renders the images', () => {
    render(<WhyChooseUs />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
