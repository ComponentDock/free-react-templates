import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows brand, link columns, recent blog entries, contact info, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Blueprint' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Blueprint' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()

    expect(screen.getByText('Photoshoot Technique')).toBeInTheDocument()
    expect(screen.getAllByText('30 March 2018')).toHaveLength(3)

    expect(screen.getByText(/Your address goes here/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+8880 44338899' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@blueprint.dev' })).toBeInTheDocument()

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
