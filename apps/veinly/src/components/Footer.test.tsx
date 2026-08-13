import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, footerFeatures } from '../data'
import { socialLinks } from './social-icons'

describe('Footer', () => {
  it('renders the dark footer with About Us, Features and Follow Us widgets', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')
    expect(footer.className).toContain('bg-footer')

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()

    for (const feature of footerFeatures) {
      expect(screen.getByRole('link', { name: feature })).toBeInTheDocument()
    }
    for (const social of socialLinks) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('credits Component Dock with a link in the copyright bar', () => {
    render(<Footer />)

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(new RegExp(`Copyright © \\d{4} ${brand.name}`))).toBeInTheDocument()
  })

  it('subscribes with the newsletter form and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email')
    await user.type(input, 'sub@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('')
  })
})
