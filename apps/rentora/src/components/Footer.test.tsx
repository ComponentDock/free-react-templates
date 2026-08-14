import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('shows the four columns with their content', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: FOOTER.aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.aboutBlurb)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: FOOTER.contactTitle }),
    ).toBeInTheDocument()
    expect(screen.getByText(`Address: ${FOOTER.address}`)).toBeInTheDocument()
    expect(screen.getByText(`Phone: ${FOOTER.phone}`)).toBeInTheDocument()
    expect(screen.getByText(`Email: ${FOOTER.email}`)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: FOOTER.linksTitle }),
    ).toBeInTheDocument()
    for (const label of FOOTER.links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(
      screen.getByRole('heading', { level: 2, name: FOOTER.newsletterTitle }),
    ).toBeInTheDocument()
  })

  it('shows the social icon links', () => {
    render(<Footer />)
    for (const name of SOCIALS) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('links the copyright credit to Component Dock', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: FOOTER.credit })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows a success message after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(FOOTER.newsletterLabel)
    await user.type(input, 'someone@example.com')
    await user.click(screen.getByRole('button', { name: FOOTER.sendLabel }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText(FOOTER.newsletterLabel)).not.toBeInTheDocument()
  })

  it('does not show a success message for an empty email', () => {
    const { container } = render(<Footer />)
    const form = container.querySelector('form')!
    fireEvent.submit(form)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText(FOOTER.newsletterLabel)).toBeInTheDocument()
  })
})
