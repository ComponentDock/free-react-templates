import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'
import { describe, expect, it } from 'vitest'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Choose Us')
  })

  it('renders the description text', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Molestie at elementum eu facilisis/)).toBeInTheDocument()
  })

  it('renders all four feature check items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Quis varius quam quisque/)).toBeInTheDocument()
    expect(screen.getByText(/Mauris augue neque gravida/)).toBeInTheDocument()
    expect(screen.getByText(/Orci phasellus egestas/)).toBeInTheDocument()
    expect(screen.getByText(/Nec feugiat nisl pretium/)).toBeInTheDocument()
  })

  it('renders the right-side image', () => {
    render(<WhyChooseUs />)
    const img = screen.getByAltText('Why choose us')
    expect(img).toBeInTheDocument()
  })
})
