import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  componentDockName,
  componentDockUrl,
  footerBrand,
  footerCopyrightSuffix,
  footerSocialLabel,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('renders the brand, copyright with a Component Dock link, and social icons', () => {
    render(<Footer />)
    expect(screen.getByText(footerBrand)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(footerCopyrightSuffix.replace('|', '\\|'))),
    ).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: componentDockName })
    expect(dockLink).toHaveAttribute('href', componentDockUrl)
    expect(screen.getByText(new RegExp(`^Copyright © \\d{4}`))).toBeInTheDocument()

    const socialList = screen.getByRole('list', { name: footerSocialLabel })
    for (const link of socialLinks) {
      expect(socialList.querySelector(`a[aria-label="${link.label}"]`)).toHaveAttribute(
        'href',
        link.href,
      )
    }
    expect(socialList.querySelectorAll('svg')).toHaveLength(3)
  })
})
