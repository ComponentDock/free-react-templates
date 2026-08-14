import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'
import { whyChooseUs } from '../data'

describe('WhyChooseUs', () => {
  it('renders the subheading, heading and intro paragraph', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(whyChooseUs.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: whyChooseUs.heading })).toBeInTheDocument()
    expect(screen.getByText(whyChooseUs.intro)).toBeInTheDocument()
  })

  it('renders the six icon items in the three-column grid', () => {
    render(<WhyChooseUs />)
    for (const item of whyChooseUs.items) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.text).length).toBeGreaterThanOrEqual(1)
    }
  })
})
