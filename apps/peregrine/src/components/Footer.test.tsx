import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  brandName,
  componentDockName,
  componentDockUrl,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightPrefix,
  experienceLinks,
  experienceTitle,
  footerAbout,
  informationLinks,
  informationTitle,
  madeWithPrefix,
  questionsTitle,
  socialLabel,
  socials,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with about text and social links', () => {
    render(<Footer />)
    expect(screen.getByText(brandName)).toBeInTheDocument()
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
    for (const social of socials) {
      expect(
        screen.getByRole('link', { name: `${socialLabel}: ${social.label}` }),
      ).toBeInTheDocument()
    }
  })

  it('renders the Information and Experience link columns', () => {
    render(<Footer />)
    const information = screen.getByRole('navigation', { name: informationTitle })
    expect(within(information).getAllByRole('link')).toHaveLength(informationLinks.length)
    for (const link of informationLinks) {
      expect(within(information).getByRole('link', { name: link })).toBeInTheDocument()
    }

    const experience = screen.getByRole('navigation', { name: experienceTitle })
    expect(within(experience).getAllByRole('link')).toHaveLength(experienceLinks.length)
    for (const link of experienceLinks) {
      expect(within(experience).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the contact column with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByText(questionsTitle)).toBeInTheDocument()
    expect(screen.getByText(contactAddress)).toBeInTheDocument()

    const phoneLink = screen.getByRole('link', { name: contactPhone })
    expect(phoneLink).toHaveAttribute('href', 'tel:' + contactPhone.replace(/[^+\d]/g, ''))
    expect(screen.getByRole('link', { name: contactEmail })).toHaveAttribute(
      'href',
      'mailto:' + contactEmail,
    )
  })

  it('credits Component Dock with a link and no source attribution', () => {
    render(<Footer />)
    const credit = screen.getByText(new RegExp(copyrightPrefix))
    expect(credit).toHaveTextContent(madeWithPrefix)
    const dockLink = screen.getByRole('link', { name: componentDockName })
    expect(dockLink).toHaveAttribute('href', componentDockUrl)
    expect(document.body.textContent).not.toMatch(/colorlib/i)
  })
})
