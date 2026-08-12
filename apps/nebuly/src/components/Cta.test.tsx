import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, subtext, and green Get in Touch button', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { name: 'Have any question about us?' })).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden flows/)).toBeInTheDocument()
    const button = screen.getByRole('link', { name: 'Get in Touch' })
    expect(button).toHaveClass('bg-accent')
  })
})
