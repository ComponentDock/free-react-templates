import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { BRAND, FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the brand, about excerpt, and social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(BRAND) })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.about)).toBeInTheDocument()
    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Navigation and Services link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    const navCol = screen.getByRole('heading', { name: 'Navigation' }).closest('div')!
    for (const item of FOOTER.navigation) {
      expect(within(navCol).getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    const svcCol = screen.getByRole('heading', { name: 'Services' }).closest('div')!
    for (const item of FOOTER.services) {
      expect(within(svcCol).getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('subscribes the newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
