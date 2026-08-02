import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the 404 heading, subheading, back-home link, and scenic background', () => {
    const { container } = render(<ErrorSection />)

    const code = screen.getByRole('heading', { level: 1 })
    expect(code.textContent).toMatch(/404/)

    const subheading = screen.getByRole('heading', { level: 2 })
    expect(subheading.textContent).toMatch(/Oops! Page Not Found/)

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(img).toHaveAttribute('alt', '')

    expect(screen.getByRole('link', { name: 'Back to homepage' })).toHaveAttribute('href', '/')
  })

  it('lets the user type into the search bar and submit without navigating away', async () => {
    const user = userEvent.setup()
    const { container } = render(<ErrorSection />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'lost page')

    const locationBefore = window.location.href
    fireEvent.submit(container.querySelector('form')!)

    expect(window.location.href).toBe(locationBefore)
    expect(screen.getByRole('textbox', { name: /search/i })).toHaveValue('lost page')
  })

  it('renders social icon links with accessible names', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'Pinterest' })).toHaveAttribute(
      'href',
      'https://pinterest.com',
    )
    expect(screen.getByRole('link', { name: 'YouTube' })).toHaveAttribute(
      'href',
      'https://youtube.com',
    )
  })
})
