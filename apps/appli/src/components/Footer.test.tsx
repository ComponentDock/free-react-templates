import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, social links, link columns, and copyright bar', () => {
    render(<Footer />)

    expect(
      screen.getByText(/Appli keeps your team connected with personalized experiences/),
    ).toBeInTheDocument()

    for (const label of ['X', 'Facebook', 'Pinterest']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }

    for (const title of ['Our solutions', 'Company', 'Support']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }

    const solutions = screen.getByRole('list', { name: 'Our solutions' })
    for (const link of [
      'Design & creatives',
      'Telecommunication',
      'Restaurant',
      'Programing',
      'Architecture',
    ]) {
      expect(within(solutions).getByText(link)).toBeInTheDocument()
    }

    const company = screen.getByRole('list', { name: 'Company' })
    for (const link of ['About us', 'Careers', 'Press', 'Blog', 'Contact']) {
      expect(within(company).getByText(link)).toBeInTheDocument()
    }

    const support = screen.getByRole('list', { name: 'Support' })
    for (const link of ['Help center', 'Terms of service', 'Privacy policy', 'FAQ']) {
      expect(within(support).getByText(link)).toBeInTheDocument()
    }

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} Appli. All rights reserved.`),
    ).toBeInTheDocument()
  })
})
