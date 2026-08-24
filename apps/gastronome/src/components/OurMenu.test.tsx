import { render, screen } from '@testing-library/react'
import { OurMenu } from './OurMenu'
import { it, expect } from 'vitest'

it('renders menu section with heading', () => {
  render(<OurMenu />)
  expect(screen.getByText('Discover')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
})

it('renders all category buttons', () => {
  render(<OurMenu />)
  expect(screen.getByRole('button', { name: 'Lunch' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Dinner' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Happy Hour' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Drink' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Starters' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Dessert' })).toBeInTheDocument()
})

it('renders category images', () => {
  render(<OurMenu />)
  expect(screen.getByRole('img', { name: 'Lunch' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Dinner' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Dessert' })).toBeInTheDocument()
})
