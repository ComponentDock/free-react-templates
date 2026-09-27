import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtitle, and search form controls', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Find Your Best Property' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Search properties for sale and rent/)).toBeInTheDocument()

    expect(screen.getByRole('combobox', { name: 'Location' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Property Type' })).toBeInTheDocument()
    expect(screen.getByRole('slider', { name: 'Price range' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Bed Room' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Bath Room' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
  })
})
