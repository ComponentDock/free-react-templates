import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Learnwise' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders contact info and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/Phone:/)).toBeInTheDocument()
    expect(screen.getByText(/Email:/)).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('target', '_blank')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('target', '_blank')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('target', '_blank')
  })
})
