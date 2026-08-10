import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, social icons and copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'dispatch' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Vimeo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google+' })).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} All rights reserved`)),
    ).toBeInTheDocument()
  })

  it('renders the subscribe panel with the email form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
