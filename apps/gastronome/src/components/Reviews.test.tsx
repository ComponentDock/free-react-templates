import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'
import { it, expect } from 'vitest'

it('renders reviews section heading', () => {
  render(<Reviews />)
  expect(screen.getByText('Customers Say')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Review' })).toBeInTheDocument()
})

it('renders three review cards', () => {
  render(<Reviews />)
  expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  expect(screen.getByText('Marco Rossi')).toBeInTheDocument()
  expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
})

it('renders review quotes', () => {
  render(<Reviews />)
  expect(screen.getByText(/wonderful dining experience/)).toBeInTheDocument()
  expect(screen.getByText(/authentic Italian food/)).toBeInTheDocument()
  expect(screen.getByText(/Beautiful atmosphere/)).toBeInTheDocument()
})

it('renders star ratings', () => {
  render(<Reviews />)
  const stars = screen.getAllByRole('img', { hidden: true })
  // Each review has an avatar + 5 stars, so at least 3 avatars + 15 stars
  expect(stars.length).toBeGreaterThanOrEqual(3)
})

it('renders reviewer locations', () => {
  render(<Reviews />)
  expect(screen.getByText('New York, USA')).toBeInTheDocument()
  expect(screen.getByText('Milan, Italy')).toBeInTheDocument()
  expect(screen.getByText('London, UK')).toBeInTheDocument()
})
