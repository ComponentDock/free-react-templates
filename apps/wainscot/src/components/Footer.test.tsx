import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  componentDockLabel,
  componentDockUrl,
  footerProducts,
  footerProductsTitle,
  instagramPhotos,
  instagramTitle,
  newsletterError,
  newsletterLabel,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
  subscribeLabel,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Top Products column with all links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerProductsTitle })).toBeInTheDocument()
    for (const product of footerProducts) {
      expect(screen.getByRole('link', { name: product })).toBeInTheDocument()
    }
  })

  it('renders the newsletter form and Instagram feed', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterText)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletterLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: new RegExp(subscribeLabel) })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    for (const photo of instagramPhotos) {
      expect(screen.getByRole('img', { name: photo.alt })).toHaveAttribute('src', photo.src)
    }
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(newsletterLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: new RegExp(subscribeLabel) }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
  })

  it('shows a success message after a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(newsletterLabel), 'design@example.com')
    await user.click(screen.getByRole('button', { name: new RegExp(subscribeLabel) }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(newsletterLabel)).not.toBeInTheDocument()
  })

  it('links Component Dock in the copyright line', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: componentDockLabel })
    expect(link).toHaveAttribute('href', componentDockUrl)
  })
})
