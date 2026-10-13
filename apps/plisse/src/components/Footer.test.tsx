import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to Component Dock with the branded label', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the current copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })

  it('names the template in the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/plisse/i)).toBeInTheDocument()
  })

  it('renders no external attribution links', () => {
    render(<Footer />)
    const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'))
    expect(hrefs).toEqual(['https://www.componentdock.com/'])
  })
})
