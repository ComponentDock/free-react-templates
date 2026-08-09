import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the featured car copy, price, and call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getAllByText('Find Your Dream Car')).toHaveLength(2)
    expect(
      screen.getByRole('heading', { level: 1, name: /Porsche Cayenne S/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Model 2019')).toBeInTheDocument()
    expect(screen.getByText('$399')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Test Drive' })).toHaveAttribute('href', '#cars')
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })

  it('renders the car search form alongside the hero copy', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Select Year')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })
})
