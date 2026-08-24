import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { it, expect } from 'vitest'

it('renders footer with contact info', () => {
  render(<Footer />)
  expect(screen.getByText('Contact Us')).toBeInTheDocument()
  expect(screen.getByText('123 Via Roma, New York, NY 10001')).toBeInTheDocument()
  expect(screen.getByText('+1 (212) 555-0199')).toBeInTheDocument()
  expect(screen.getByText('info@gastronome.com')).toBeInTheDocument()
})

it('renders opening times', () => {
  render(<Footer />)
  expect(screen.getByText('Opening Times')).toBeInTheDocument()
  expect(screen.getByText('Mon - Fri: 11:00 AM - 10:00 PM')).toBeInTheDocument()
  expect(screen.getByText('Sat - Sun: 10:00 AM - 11:00 PM')).toBeInTheDocument()
})

it('renders latest posts', () => {
  render(<Footer />)
  expect(screen.getByText('Latest Posts')).toBeInTheDocument()
  expect(screen.getByText('Christmas Special Menu')).toBeInTheDocument()
  expect(screen.getByText('Wine Tasting Event')).toBeInTheDocument()
  expect(screen.getByText("Chef's New Recipe")).toBeInTheDocument()
})

it('renders gallery images', () => {
  render(<Footer />)
  const images = screen.getAllByAltText('Gallery')
  expect(images).toHaveLength(6)
})

it('renders social media links', () => {
  render(<Footer />)
  expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
})

it('renders Component Dock link', () => {
  render(<Footer />)
  const link = screen.getByRole('link', { name: 'Component Dock' })
  expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  expect(link).toHaveAttribute('target', '_blank')
})

it('renders copyright with year', () => {
  render(<Footer />)
  const year = new Date().getFullYear()
  expect(screen.getByText(new RegExp(`${year}.*Gastronome`))).toBeInTheDocument()
})
