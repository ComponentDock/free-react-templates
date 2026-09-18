import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading with brand name', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /We Are Medvista A Medical Clinic/i }),
    ).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Medvista medical clinic/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders both CTA buttons', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Make an appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact us/i })).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/dedicated to providing exceptional healthcare/i)).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art facilities/i)).toBeInTheDocument()
  })
})
