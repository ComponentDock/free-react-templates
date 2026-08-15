import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'
import { whyChooseUs } from '../data'

describe('WhyChooseUs', () => {
  it('renders the heading and six cards with titles', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
    for (const service of whyChooseUs) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
  })
})
