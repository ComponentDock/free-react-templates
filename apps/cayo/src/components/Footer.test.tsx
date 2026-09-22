import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Cayo')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText('(123) 456-78-910')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('info@cayohotel.com')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Footer />)
    expect(screen.getByText('96 Ernser Vista Suite 437, NY, US')).toBeInTheDocument()
  })

  it('renders Company section', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Amenities' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Restaurant' })).toBeInTheDocument()
  })

  it('renders Services section', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Spa' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pool' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Transfer' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Events' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year} Cayo Hotel`))).toBeInTheDocument()
  })
})
