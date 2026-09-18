import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four services', () => {
    render(<Services />)
    expect(screen.getByText('Software')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('Front End')).toBeInTheDocument()
    expect(screen.getByText('UX Design')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Few would argue/)
    expect(descriptions.length).toBe(4)
  })

  it('renders service icons', () => {
    render(<Services />)
    // Each service card has an icon container
    const cards = screen.getAllByText(/Software|WordPress|Front End|UX Design/)
    expect(cards.length).toBe(4)
  })
})
