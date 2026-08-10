import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  aboutHeading,
  aboutText,
  contactAddress,
  contactEmail,
  contactHeading,
  contactPhone,
  creditBrand,
  creditPrefix,
  importantLinks,
  linksHeading,
  newsletterHeading,
  newsletterLabel,
  newsletterText,
} from '../data'

describe('Footer', () => {
  it('renders the four widget columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: aboutHeading })).toBeInTheDocument()
    expect(screen.getByText(aboutText)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: contactHeading })).toBeInTheDocument()
    expect(screen.getByText(contactAddress)).toBeInTheDocument()
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText(contactEmail)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: linksHeading })).toBeInTheDocument()
    for (const link of importantLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    expect(screen.getByText(newsletterText)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: newsletterLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join newsletter' })).toBeInTheDocument()
  })

  it('renders the copyright line with the Colorlib credit and social links', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(creditPrefix))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: creditBrand })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })
})
