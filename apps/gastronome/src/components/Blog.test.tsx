import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { it, expect } from 'vitest'

it('renders blog section heading', () => {
  render(<Blog />)
  expect(screen.getByText('Latest News')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'The Blog' })).toBeInTheDocument()
})

it('renders three blog posts', () => {
  render(<Blog />)
  expect(screen.getByText('The Art of Italian Cooking')).toBeInTheDocument()
  expect(screen.getByText('Best Wine Pairings for Pasta')).toBeInTheDocument()
  expect(screen.getByText('Holiday Menu Preview')).toBeInTheDocument()
})

it('renders date badges on blog cards', () => {
  render(<Blog />)
  expect(screen.getByText('15 Dec')).toBeInTheDocument()
  expect(screen.getByText('10 Dec')).toBeInTheDocument()
  expect(screen.getByText('5 Dec')).toBeInTheDocument()
})

it('renders Continue Reading links', () => {
  render(<Blog />)
  const links = screen.getAllByText(/Continue Reading →/)
  expect(links).toHaveLength(3)
  links.forEach((link) => {
    expect(link).toHaveAttribute('href', '#blog')
  })
})

it('renders blog post images', () => {
  render(<Blog />)
  expect(screen.getByRole('img', { name: 'The Art of Italian Cooking' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Best Wine Pairings for Pasta' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Holiday Menu Preview' })).toBeInTheDocument()
})
