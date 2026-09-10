import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the section heading', () => {
    render(<ChooseUs />)

    expect(screen.getByRole('heading', { level: 2, name: /We Have 20 Years/ })).toBeInTheDocument()
  })

  it('renders all four highlight checklist items', () => {
    render(<ChooseUs />)

    expect(screen.getByText(/Fully certified mechanics/)).toBeInTheDocument()
    expect(screen.getByText(/State-of-the-art diagnostic/)).toBeInTheDocument()
    expect(screen.getByText(/Genuine OEM parts/)).toBeInTheDocument()
    expect(screen.getByText(/Transparent pricing/)).toBeInTheDocument()
  })

  it('renders the About Us CTA button', () => {
    render(<ChooseUs />)

    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the split layout with background image div', () => {
    const { container } = render(<ChooseUs />)

    const bgDiv = container.querySelector('[style*="background-image"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
