import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'
import { it, expect } from 'vitest'

it('renders parallax banner and three feature cards', () => {
  render(<Intro />)
  expect(screen.getByText('Discover')).toBeInTheDocument()
  expect(screen.getAllByText('Gastronome')).toHaveLength(1)
  expect(screen.getByText('Romantic Restaurant')).toBeInTheDocument()
  expect(screen.getByText('Delicious Food')).toBeInTheDocument()
  expect(screen.getByText('Red Wines You Love')).toBeInTheDocument()
})

it('renders Learn More links', () => {
  render(<Intro />)
  const links = screen.getAllByText(/Learn More →/)
  expect(links).toHaveLength(3)
  links.forEach((link) => {
    expect(link).toHaveAttribute('href', '#gallery')
  })
})

it('renders feature card images', () => {
  render(<Intro />)
  expect(screen.getByRole('img', { name: 'Romantic Restaurant' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Delicious Food' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Red Wines You Love' })).toBeInTheDocument()
})
