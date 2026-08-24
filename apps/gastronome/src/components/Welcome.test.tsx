import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'
import { it, expect } from 'vitest'

it('renders welcome section with heading and content', () => {
  render(<Welcome />)
  expect(screen.getByText('Italian Restaurant')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Welcome' })).toBeInTheDocument()
  expect(screen.getByText(/Welcome to Gastronome/)).toBeInTheDocument()
  expect(screen.getByText('Our Story →')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Restaurant interior' })).toBeInTheDocument()
})

it('has correct link', () => {
  render(<Welcome />)
  expect(screen.getByText('Our Story →')).toHaveAttribute('href', '#about')
})
