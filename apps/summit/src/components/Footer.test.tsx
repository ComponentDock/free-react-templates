import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CONTACT_INFO, FOOTER_SOCIALS, GALLERY_IMAGES, WORKSHOP_LINKS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders four columns: About, Contact, Workshops and Gallery', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Summit home' })).toHaveTextContent('Summit')
    for (const title of ['Contact', 'Workshops', 'Gallery']) {
      expect(screen.getByRole('heading', { level: 5, name: title })).toBeInTheDocument()
    }
    for (const info of CONTACT_INFO) {
      expect(screen.getByText(new RegExp(`${info.label}:`))).toBeInTheDocument()
    }
    for (const link of WORKSHOP_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Gallery image \d/ })).toHaveLength(
      GALLERY_IMAGES.length,
    )
    for (const social of FOOTER_SOCIALS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('credits Component Dock and renders Terms/Privacy links in the copyright bar', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
  })
})
