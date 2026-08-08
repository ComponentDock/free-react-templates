import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, sub, and three package cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services & Packages' })).toBeInTheDocument()
    expect(screen.getByText(/thoughtfully designed packages/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Portrait Session' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wedding Coverage' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Commercial' })).toBeInTheDocument()
  })

  it('shows a blurb, price, features, and an inquiry link per card', () => {
    render(<Services />)
    expect(screen.getByText('From $350')).toBeInTheDocument()
    expect(screen.getByText('From $1,500')).toBeInTheDocument()
    expect(screen.getByText('From $800')).toBeInTheDocument()

    expect(screen.getByText('1-hour photography session')).toBeInTheDocument()
    expect(screen.getByText('Up to 2 locations')).toBeInTheDocument()
    expect(screen.getByText('30 professionally edited photos')).toBeInTheDocument()
    expect(screen.getByText('Private online gallery')).toBeInTheDocument()

    expect(screen.getByText('2 photographers')).toBeInTheDocument()
    expect(screen.getByText('500+ edited photographs')).toBeInTheDocument()
    expect(screen.getByText('Premium wedding album')).toBeInTheDocument()
    expect(screen.getByText('Complimentary engagement session')).toBeInTheDocument()

    expect(screen.getByText('Product shots and styling')).toBeInTheDocument()
    expect(screen.getByText('Editorial and lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Full commercial licensing included')).toBeInTheDocument()

    const inquireLinks = screen.getAllByRole('link', { name: /Inquire More/i })
    expect(inquireLinks).toHaveLength(3)
    for (const link of inquireLinks) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
