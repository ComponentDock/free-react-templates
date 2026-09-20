import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders heading and features', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('22,931 Yearly Graduates')).toBeInTheDocument()
    expect(screen.getByText('150 Universities Worldwide')).toBeInTheDocument()
    expect(screen.getByText('Top Professionals in The World')).toBeInTheDocument()
  })
})
