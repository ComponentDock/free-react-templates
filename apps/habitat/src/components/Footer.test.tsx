import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the photo strip, brand, widgets and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(7)
    expect(screen.getByRole('link', { name: /Habitat\./ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Habitat' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByText('132 Liberty Streetelit, Plano, Texas')).toBeInTheDocument()
    expect(screen.getByText('hello@habitat.com')).toBeInTheDocument()
    expect(screen.getByText('214-805-4428')).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday: 9 am – 5 pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 9 am – 1pm')).toBeInTheDocument()
    for (const label of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders two blog post rows with time and Read More links', () => {
    render(<Footer />)
    expect(
      screen.getByText('How to find the perfect area for your next house.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Five simple staging tips that sell homes faster.')).toBeInTheDocument()
    expect(screen.getAllByText('5 min')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(2)
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', {
      name: /This template is made with ♥ at Component Dock/,
    })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
