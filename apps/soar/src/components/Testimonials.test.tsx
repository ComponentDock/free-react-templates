import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a quote, and the author details', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: /satisfied customer says/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })
})
