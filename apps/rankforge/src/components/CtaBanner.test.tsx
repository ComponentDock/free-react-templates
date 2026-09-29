import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading, description, and Contact Us button', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Have project in mind?' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
