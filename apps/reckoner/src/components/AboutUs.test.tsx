import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders the About Us label', () => {
    render(<AboutUs />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<AboutUs />)

    expect(
      screen.getByRole('heading', { name: 'Mindful Planning of Monetary Spending and Saving' }),
    ).toBeInTheDocument()
  })

  it('renders body paragraphs', () => {
    render(<AboutUs />)

    expect(
      screen.getByText(/We are a team of experienced bookkeeping professionals/),
    ).toBeInTheDocument()
    expect(screen.getByText(/With years of experience in the industry/)).toBeInTheDocument()
  })

  it('renders all bullet points with arrow icons', () => {
    render(<AboutUs />)

    expect(screen.getByText('Expert financial analysis and reporting')).toBeInTheDocument()
    expect(screen.getByText('Strategic budget planning and optimization')).toBeInTheDocument()
    expect(screen.getByText('Tax preparation and compliance')).toBeInTheDocument()
    expect(screen.getByText('Business growth consulting')).toBeInTheDocument()
  })

  it('renders the image with proper alt text', () => {
    render(<AboutUs />)

    const img = screen.getByRole('img', { name: 'Professional bookkeeping services' })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/reckoner-about/600/400')
  })

  it('has proper ARIA attributes', () => {
    render(<AboutUs />)

    const section = screen
      .getByRole('heading', { name: 'Mindful Planning of Monetary Spending and Saving' })
      .closest('section')
    expect(section).toHaveAttribute('id', 'about')
  })
})
