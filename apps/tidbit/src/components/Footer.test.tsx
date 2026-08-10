import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  brandName,
  connectHeading,
  footerAboutHeading,
  footerCategoryLinks,
  footerNavLinks,
  socials,
} from '../data'

describe('Footer', () => {
  it('renders the About Us column with descriptive text', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: footerAboutHeading })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the two footer link columns', () => {
    render(<Footer />)

    for (const link of [...footerNavLinks, ...footerCategoryLinks]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Connect With Us heading and all social icons', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { name: connectHeading })).toBeInTheDocument()
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(6) // 5 social + 1 heart
  })

  it('renders the copyright line with the current year and brand credit', () => {
    render(<Footer />)

    const copyright = screen.getByText(/Copyright ©/)
    expect(copyright).toHaveTextContent(new RegExp(String(new Date().getFullYear())))
    expect(copyright).toHaveTextContent(/made with/)
    expect(copyright).toHaveTextContent(`by ${brandName}`)
  })
})
