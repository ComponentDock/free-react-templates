import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Truss\./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Connect/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /X/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Pinterest/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Dribbble/i })).toBeInTheDocument()
  })

  it('renders the Projects and Services link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /La Lega Stadium/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Consultancy/i })).toBeInTheDocument()
  })

  it('renders contact details and the copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()
    expect(screen.getByText(/43 Raymouth Rd\. Baltemoer, London 3910/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+1\(123\)-456-7890/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /info@mydomain\.com/i })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Truss\. All rights reserved\./i)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Kraft/i)).toBeInTheDocument()
  })
})
