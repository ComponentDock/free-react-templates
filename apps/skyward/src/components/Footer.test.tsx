import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { office } from '../data'

describe('Footer', () => {
  it('renders the brand column with about text and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Skyward' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the Useful Links, Navigational, and Office columns', () => {
    render(<Footer />)

    const useful = screen.getByRole('heading', { level: 3, name: 'Useful Links' }).closest('div')!
    for (const label of [
      'Servers',
      'Windows Hosting',
      'Cloud Hosting',
      'OS Servers',
      'Linux Servers',
      'Policy',
    ]) {
      expect(within(useful).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const navigational = screen
      .getByRole('heading', { level: 3, name: 'Navigational' })
      .closest('div')!
    for (const label of ['Home', 'Domain', 'Hosting', 'About', 'Blog', 'Contact']) {
      expect(within(navigational).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: office.phone })).toHaveAttribute(
      'href',
      'tel:' + office.phone.replace(/[^\d+]/g, ''),
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
  })

  it('renders the copyright bar with the Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright © 2026 All rights reserved/)).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
