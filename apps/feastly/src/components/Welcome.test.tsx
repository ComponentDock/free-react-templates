import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome heading and CTA button', () => {
    render(<Welcome />)

    expect(screen.getByText(/Welcome/)).toBeInTheDocument()
    expect(screen.getByText(/to Feastly/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book a table/i })).toBeInTheDocument()
  })

  it('links the CTA to the contact section', () => {
    render(<Welcome />)

    expect(screen.getByRole('link', { name: /book a table/i })).toHaveAttribute('href', '#contact')
  })

  it('has an about section id', () => {
    render(<Welcome />)

    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
