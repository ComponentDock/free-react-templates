import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import CTA from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Do you Have any Project?')).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<CTA />)
    expect(screen.getByText(/Temporibus autem quibusdam/)).toBeInTheDocument()
  })

  it('renders Contact Us button', () => {
    render(<CTA />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
