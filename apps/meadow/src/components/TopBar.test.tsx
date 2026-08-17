import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { brandName, contactPhone, tagline } from '../data'

describe('TopBar', () => {
  it('renders the dark top bar with brand, tagline, and three contacts', () => {
    render(<TopBar />)
    const bar = screen.getByRole('banner')
    expect(bar).toHaveClass('bg-ink')
    expect(screen.getByRole('link', { name: brandName })).toHaveAttribute('href', '#home')
    expect(screen.getByText(tagline)).toBeInTheDocument()
    expect(screen.getByText('@info@email.com')).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText('San Francisco, California, USA')).toBeInTheDocument()
  })

  it('labels each contact with green label text', () => {
    render(<TopBar />)
    expect(screen.getByText('Email:')).toHaveClass('text-brand')
    expect(screen.getByText('Call Us')).toHaveClass('text-brand')
    expect(screen.getByText('Location')).toHaveClass('text-brand')
  })
})
