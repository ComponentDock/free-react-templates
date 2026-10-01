import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the section heading and subtitle', () => {
    render(<Sponsors />)
    expect(screen.getByText('Our Sponsors')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Proudly Supported By' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/These amazing companies/)).toBeInTheDocument()
  })

  it('renders 4 sponsor cards with name, blurb, and Learn More link', () => {
    render(<Sponsors />)
    expect(screen.getByText('LinearB')).toBeInTheDocument()
    expect(screen.getByText('Engineering management platform')).toBeInTheDocument()
    expect(screen.getByText('Notion')).toBeInTheDocument()
    expect(screen.getByText('Vercel')).toBeInTheDocument()
    expect(screen.getByText('Lemon.io')).toBeInTheDocument()
    expect(screen.getByText('Hire vetted developers')).toBeInTheDocument()
    const learnMore = screen.getAllByRole('link', { name: /Learn More/ })
    expect(learnMore).toHaveLength(4)
  })

  it('sponsor CTA links to the contact section', () => {
    render(<Sponsors />)
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })
})
