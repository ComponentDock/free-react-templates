import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the single level-1 headline with the freight-broker label', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Awesome template for courier & delivery services')
    expect(screen.getByText('Freight broker')).toBeInTheDocument()
  })

  it('renders a blurb and the skewed View services CTA anchored to the services section', () => {
    render(<Hero />)
    expect(screen.getByText(/Move anything, anywhere/)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'View services' })
    expect(cta).toHaveAttribute('href', '#services')
    const inner = cta.querySelector('span')
    expect(inner?.className).toContain('skew-x-[30deg]')
  })
})
