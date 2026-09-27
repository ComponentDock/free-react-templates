import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA heading', () => {
    render(<CallToAction />)
    expect(screen.getByRole('heading', { name: /Fresh Ideas/i })).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CallToAction />)
    expect(screen.getByText(/INC5000/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: /Start your stories/i })).toBeInTheDocument()
  })

  it('has the contact section with an ID', () => {
    render(<CallToAction />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
