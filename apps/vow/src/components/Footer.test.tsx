import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Vow')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Clothes')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
