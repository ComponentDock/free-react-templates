import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerInstagramCount, instagramImageLabel } from '../data'

describe('Footer', () => {
  it('renders the About Us column with a heading and a blurb', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the Newsletter column with a tagline and an email form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByText('Stay updated with our latest trends')).toBeInTheDocument()
    const input = screen.getByRole('textbox', { name: 'Email Address' })
    const form = input.closest('form')
    expect(form).not.toBeNull()
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }))
    expect(input).toHaveValue('reader@example.com')
  })

  it('renders the Instagram feed with eight square thumbnails', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    const feedImages = images.filter((img) =>
      img.getAttribute('alt')?.startsWith('Instagram feed image'),
    )
    expect(feedImages).toHaveLength(footerInstagramCount)
    expect(screen.getByAltText(instagramImageLabel(0))).toBeInTheDocument()
  })

  it('renders the Follow Us column with social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Facebook profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Twitter profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Dribbble profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Behance profile' })).toBeInTheDocument()
  })

  it('renders the copyright bar with the monorepo credit', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/Recreated from the ColorLib Ruft design/)).toBeInTheDocument()
  })
})
