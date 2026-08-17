import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand widget with blurb and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Homely' })).toBeInTheDocument()
    expect(screen.getByText(/Homely makes borrowing simple/)).toBeInTheDocument()
    for (const name of ['Facebook', 'Twitter', 'Pinterest', 'Instagram']) {
      expect(screen.getByRole('link', { name })).toHaveAttribute(
        'href',
        `https://www.${name.toLowerCase()}.com`,
      )
    }
  })

  it('renders the Quick Links and Solution columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    for (const label of ['Work', 'Services', 'Products', 'Tips & Tricks']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Solution' })).toBeInTheDocument()
    for (const label of ['Air freight', 'Ocean freight', 'Large projects']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the newsletter widget with the contact line', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@homely.demo' })).toHaveAttribute(
      'href',
      'mailto:hello@homely.demo',
    )
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
