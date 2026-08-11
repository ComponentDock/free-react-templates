import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  address,
  email,
  footerBrandText,
  footerCategories,
  footerCategoriesTitle,
  informationLinks,
  informationTitle,
  phone,
  questionsTitle,
  siteName,
  socialLabel,
  socialNames,
} from '../data'

describe('Footer', () => {
  it('renders the brand, description, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByText(footerBrandText)).toBeInTheDocument()
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
  })

  it('renders the Information column with its links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: informationTitle })).toBeInTheDocument()
    for (const link of informationLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Categories column with its links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerCategoriesTitle })).toBeInTheDocument()
    for (const category of footerCategories) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }
  })

  it('renders the contact column with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: questionsTitle })).toBeInTheDocument()
    expect(screen.getByText(address)).toBeInTheDocument()
    expect(screen.getByText(phone)).toBeInTheDocument()
    expect(screen.getByText(email)).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
