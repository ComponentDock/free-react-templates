import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the CTA, link columns, social links, and copyright', () => {
    render(<Footer />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Do You Have Any Project or Query?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: /^Atrium/ })).toBeInTheDocument()

    const navigation = screen.getByRole('navigation', { name: 'Footer navigation' })
    expect(within(navigation).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(navigation).getByRole('link', { name: 'Projects' })).toBeInTheDocument()

    const services = screen.getByRole('navigation', { name: 'Footer services' })
    expect(within(services).getByRole('link', { name: 'Interior' })).toBeInTheDocument()
    expect(within(services).getByRole('link', { name: 'Exterior' })).toBeInTheDocument()
    expect(within(services).getByRole('link', { name: 'Bridge' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Atrium\. All rights reserved/i)).toBeInTheDocument()
  })
})
