import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Footwell — Footer Template')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Footer Demo')).toBeInTheDocument()
  })

  it('renders the CTA banner section', () => {
    render(<App />)

    expect(screen.getByText('Ready for a next project?')).toBeInTheDocument()
    expect(screen.getByText("Let's get started!")).toBeInTheDocument()
    const contactLinks = screen.getAllByRole('link', { name: 'Contact us' })
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders footer columns', () => {
    render(<App />)

    expect(screen.getByText('Footwell')).toBeInTheDocument()
    expect(screen.getByText('Customers')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Further Information')).toBeInTheDocument()
    expect(screen.getByText('Follow us')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Buyer' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Supplier' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'About us' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '#')
    expect(screen.getAllByRole('link', { name: 'Contact us' }).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#')
  })

  it('renders social media links with accessible labels', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Send' })).toHaveAttribute('href', '#')
  })

  it('renders Component Dock attribution', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders copyright notice', () => {
    render(<App />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
