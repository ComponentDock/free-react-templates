import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and four centered feature cards', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('heading', { name: 'Why choose us?' })).toBeInTheDocument()
    for (const title of ['Quick apply', 'Online & Secure', 'Just time', 'Low interest']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/A soft-check application that takes minutes/)).toBeInTheDocument()
    expect(screen.getByText(/Rates from 3.9% APR/)).toBeInTheDocument()
  })
})
