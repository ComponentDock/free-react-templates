import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FOOTER_QUICK_LINKS, SOCIAL_LINKS } from '../data/content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four columns on the dark footer', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer')
    for (const heading of ['About Us', 'Quick Links', 'Follow Us', 'Subscribe Newsletter']) {
      expect(screen.getByRole('heading', { level: 2, name: heading }).className).toContain(
        'text-white',
      )
    }
    for (const link of FOOTER_QUICK_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(container.querySelector('.border-white\\/10')).toBeInTheDocument()
  })

  it('links social icons with accessible names', () => {
    render(<Footer />)
    for (const social of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Cargolane\. All rights reserved\./)).toBeInTheDocument()
  })

  it('blocks invalid newsletter emails with an error', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
  })

  it('confirms a valid newsletter subscription locally', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send' })).not.toBeInTheDocument()
  })
})
