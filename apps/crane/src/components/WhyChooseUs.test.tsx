import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<WhyChooseUs />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/variations of passages/)).toBeInTheDocument()
  })
})
