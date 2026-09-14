import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Are Digital Services')
    expect(screen.getByText(/innovative digital solutions/)).toBeInTheDocument()
  })

  it('renders CTA button linking to services', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /our services/i })
    expect(cta).toHaveAttribute('href', '#services')
  })
})
