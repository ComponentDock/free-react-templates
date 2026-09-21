import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and six items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /Why People Choose Us/i })).toBeInTheDocument()
    expect(screen.getByText('Support 24/7')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('Personalized Sessions')).toBeInTheDocument()
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
    expect(screen.getByText('Daily Classes')).toBeInTheDocument()
    expect(screen.getByText('Health Focus')).toBeInTheDocument()
  })
})
