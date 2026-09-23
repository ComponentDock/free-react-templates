import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Clients Choose Us?')
  })

  it('renders all four stats', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('89%')).toBeDefined()
    expect(screen.getByText('421')).toBeDefined()
    expect(screen.getByText('392')).toBeDefined()
    expect(screen.getByText('913')).toBeDefined()
  })

  it('renders the Free Consultation CTA', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('link', { name: /free consultation/i })).toBeDefined()
  })
})
