import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders heading and Call Us Now button', () => {
    render(<CTA />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Let's get started")
    expect(screen.getByRole('link', { name: /Call Us Now/ })).toBeInTheDocument()
  })

  it('CTA button links to contact section', () => {
    render(<CTA />)

    expect(screen.getByRole('link', { name: /Call Us Now/ })).toHaveAttribute('href', '#contact')
  })
})
