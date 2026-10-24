import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('shows the heading and the four feature items', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()

    for (const title of [
      'Care Advices',
      'Customer Supports',
      'Emergency Services',
      'Veterinary Help',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
