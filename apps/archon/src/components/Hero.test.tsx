import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline headline with a strong accent', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Awesome free HTML template/)
    expect(heading.querySelector('strong')).toHaveTextContent(/modern websites/)
  })

  it('shows the author name and photo', () => {
    render(<Hero />)

    expect(screen.getByText('Adam Aderson')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Adam Aderson/i })).toBeInTheDocument()
  })

  it('renders the Get Quote box with blurb and button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get Quote' })).toBeInTheDocument()
    expect(screen.getByText(/We craft spaces that speak/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get a quote' })).toBeInTheDocument()
  })

  it('renders the share row with Facebook and Twitter links', () => {
    render(<Hero />)

    expect(screen.getByText('Share me please!')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share on Twitter' })).toBeInTheDocument()
  })
})
