import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  brandName,
  companyLinks,
  companyTitle,
  componentDockName,
  componentDockUrl,
  destinationLinks,
  destinationsTitle,
  instagramImages,
  instagramTitle,
  madeWithPrefix,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand widget, Company links, destination links, and Instagram grid', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()

    const companyNav = screen.getByRole('navigation', { name: companyTitle })
    for (const link of companyLinks) {
      expect(within(companyNav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    const destinationNav = screen.getByRole('navigation', { name: destinationsTitle })
    for (const link of destinationLinks) {
      expect(within(destinationNav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(instagramImages.length)
    for (const image of instagramImages) {
      expect(
        screen.getByRole('img', { name: `Instagram photo ${instagramImages.indexOf(image) + 1}` }),
      ).toBeInTheDocument()
    }
  })

  it('credits Component Dock and never references the source template', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: componentDockName })
    expect(credit).toHaveAttribute('href', componentDockUrl)
    expect(screen.getByText(new RegExp(madeWithPrefix))).toBeInTheDocument()
    expect(document.body.textContent).not.toMatch(/colorlib/i)
  })
})
