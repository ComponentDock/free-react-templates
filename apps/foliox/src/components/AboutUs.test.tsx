import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders section heading', () => {
    render(<AboutUs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us')
  })

  it('renders Who We Are content', () => {
    render(<AboutUs />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Who We Are')
    expect(screen.getByText(/creative agency/)).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<AboutUs />)
    expect(screen.getByText('Reasonable Pricing')).toBeInTheDocument()
    expect(screen.getByText('eCommerce Support')).toBeInTheDocument()
    expect(screen.getByText('User-Friendly Admin')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<AboutUs />)
    expect(screen.getByAltText('About our agency')).toBeInTheDocument()
  })
})
