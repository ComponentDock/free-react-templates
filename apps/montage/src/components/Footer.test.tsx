import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { footerColumns, footerCopyright, socialLabel, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the widget columns with links and text', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    for (const column of footerColumns) {
      expect(within(footer).getByRole('heading', { name: column.title })).toBeInTheDocument()
    }
    expect(within(footer).getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Testimonials' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Travel' })).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: 'Games' })).toBeInTheDocument()
    expect(within(footer).getByText(/Montage is a video magazine template/)).toBeInTheDocument()
  })

  it('renders the social links with accessible labels', () => {
    render(<Footer />)
    const list = screen.getByRole('list', { name: socialLabel })
    for (const social of socialLinks) {
      expect(within(list).getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(footerCopyright))).toBeInTheDocument()
  })

  it('uses the dark footer background', () => {
    const { container } = render(<Footer />)
    expect(container.firstElementChild).toHaveClass('bg-footer')
  })
})
