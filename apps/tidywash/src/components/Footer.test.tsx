import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

it('renders footer columns and Component Dock link', () => {
  render(<Footer />)
  expect(screen.getByText('Recent Posts')).toBeInTheDocument()
  expect(screen.getByText('Explore')).toBeInTheDocument()
  expect(screen.getByText('Have a Question?')).toBeInTheDocument()
  expect(screen.getByText('Component Dock')).toBeInTheDocument()
  expect(
    screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
  ).toBeInTheDocument()
})

it('has correct Component Dock link', () => {
  render(<Footer />)
  const link = screen.getByText('Component Dock')
  expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  expect(link).toHaveAttribute('target', '_blank')
})
