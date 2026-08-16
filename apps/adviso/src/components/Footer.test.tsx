import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about column with social icons', () => {
    render(<Footer />)

    expect(
      screen.getByText(/automated process starts as soon as your business plan/i),
    ).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Linkedin', 'Instagram']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
  })

  it('renders the Navigation and Services link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    for (const label of ['Drone Mapping', 'Real State', 'Commercial', 'Construction']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('subscribes to the newsletter and shows a success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock and scrolls to top', async () => {
    const user = userEvent.setup()
    const scrollSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)
    render(<Footer />)

    const credit = screen.getByRole('link', { name: /Component Dock/i })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')

    await user.click(screen.getByRole('button', { name: 'Go to top' }))
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    scrollSpy.mockRestore()
  })
})
