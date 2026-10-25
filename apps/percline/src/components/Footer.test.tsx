import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER, EMAIL } from '../content'

describe('Footer', () => {
  it('renders the brand block, three link columns and the newsletter', () => {
    render(<Footer />)

    for (const column of FOOTER.columns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getByRole('heading', { name: FOOTER.newsletterHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(FOOTER.newsletterLabel)).toHaveAttribute(
      'placeholder',
      FOOTER.newsletterPlaceholder,
    )
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('links Component Dock as the attribution', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: FOOTER.componentDockLabel })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveClass('font-semibold')
    expect(screen.getByText(FOOTER.legal)).toBeInTheDocument()
  })

  it('draws the three social tiles inline', () => {
    render(<Footer />)
    for (const social of FOOTER.socials) {
      const tile = screen.getByRole('link', { name: social.label })
      expect(tile.querySelector('svg')).not.toBeNull()
      expect(tile.querySelector('path')).toHaveAttribute('d')
    }
  })

  it('rejects a malformed address and never submits anything', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(FOOTER.newsletterLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: FOOTER.newsletterSubmit }))

    expect(screen.getByText(FOOTER.newsletterError)).toBeInTheDocument()
    expect(screen.getByLabelText(FOOTER.newsletterLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms a valid subscribe and clears the field', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText(FOOTER.newsletterLabel), {
      target: { value: 'neighbour@example.com' },
    })
    fireEvent.submit(screen.getByRole('button', { name: FOOTER.newsletterSubmit }).closest('form')!)

    expect(screen.getByRole('status')).toHaveTextContent(FOOTER.newsletterSuccess)
    expect(screen.queryByLabelText(FOOTER.newsletterLabel)).toBeNull()
  })
})
