import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the Request a Quote heading', () => {
    render(<Quote />)

    expect(screen.getByRole('heading', { level: 2, name: 'Request a Quote' })).toBeInTheDocument()
  })

  it('renders the Become A Model callout', () => {
    render(<Quote />)

    expect(screen.getByText(/Become A Model\? Call us now to know how!/)).toBeInTheDocument()
    expect(screen.getByText('Model Courses')).toBeInTheDocument()
  })

  it('renders the Know more link', () => {
    render(<Quote />)

    expect(screen.getByRole('link', { name: 'Know more' })).toHaveAttribute('href', '#appointment')
  })
})
