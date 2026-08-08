import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Navigations/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Europe/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /USA/i })).toBeInTheDocument()
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })
})
