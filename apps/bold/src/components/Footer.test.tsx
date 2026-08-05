import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, social links, and copyright bar', () => {
    render(<Footer />)

    for (const title of ['About', 'Solutions', 'Why Bold', 'Resources', 'Company']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Studio')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} Bold. All rights reserved.`),
    ).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })
})
