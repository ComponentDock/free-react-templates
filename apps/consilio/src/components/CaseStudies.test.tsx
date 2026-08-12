import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('shows the eyebrow and heading', () => {
    render(<CaseStudies />)

    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Case Studies' })).toBeInTheDocument()
  })

  it('renders three detailed cards with category, title, blurb, client, and metric', () => {
    render(<CaseStudies />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    expect(screen.getByText('Finance')).toBeInTheDocument()
    expect(screen.getByText('Healthcare')).toBeInTheDocument()
    expect(screen.getByText('Manufacturing')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Digital Transformation for Regional Bank' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Modernized core processes/)).toBeInTheDocument()
    expect(screen.getByText(/Meridian Trust Bank/)).toBeInTheDocument()
    expect(screen.getByText('+45% efficiency')).toBeInTheDocument()
    expect(screen.getByText('-30% wait time')).toBeInTheDocument()
    expect(screen.getByText('$2M saved')).toBeInTheDocument()
  })
})
