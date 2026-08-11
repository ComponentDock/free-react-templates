import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  address,
  copyright,
  credit,
  email,
  informationLinks,
  latestNews,
  phone,
  questionsTitle,
  siteName,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('renders the four widget columns on the dark cocoa background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-cocoa')
    expect(within(footer).getByRole('link', { name: `${siteName}.` })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'latest News' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: questionsTitle })).toBeInTheDocument()
  })

  it('lists the latest news items with headline and meta', () => {
    render(<Footer />)
    for (const item of latestNews) {
      expect(screen.getByRole('link', { name: item.headline })).toBeInTheDocument()
      expect(screen.getByText(item.meta)).toBeInTheDocument()
    }
  })

  it('lists the information links', () => {
    render(<Footer />)
    for (const link of informationLinks) {
      expect(screen.getByRole('link', { name: link })).toHaveAttribute('href', '#top')
    }
  })

  it('shows contact details as links', () => {
    render(<Footer />)
    expect(screen.getByText(address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: phone })).toHaveAttribute('href', 'tel:+23923929210')
    expect(screen.getByRole('link', { name: email })).toHaveAttribute('href', `mailto:${email}`)
  })

  it('shows share links in the about column', () => {
    render(<Footer />)
    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('renders the copyright and the ColorLib credit in the bottom bar', () => {
    render(<Footer />)
    expect(screen.getByText(`${copyright} | ${credit}`)).toBeInTheDocument()
  })
})
