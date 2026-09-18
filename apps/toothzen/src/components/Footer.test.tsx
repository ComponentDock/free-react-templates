import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

it('renders the brand heading', () => {
  render(<Footer />)
  const headings = screen.getAllByText('Toothzen')
  expect(headings.length).toBeGreaterThanOrEqual(1)
})

it('renders the brand description', () => {
  render(<Footer />)
  expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
})

it('renders footer column headings', () => {
  render(<Footer />)
  expect(screen.getByText('Explore')).toBeInTheDocument()
  expect(screen.getByText('Info')).toBeInTheDocument()
})

it('renders the copyright', () => {
  render(<Footer />)
  expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
})

it('links to Component Dock', () => {
  render(<Footer />)
  const link = screen.getByText('Component Dock')
  expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
})
