import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright and Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()

    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders navigation column headings', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const headingTexts = headings.map((h) => h.textContent)
    expect(headingTexts).toContain('Services')
    expect(headingTexts).toContain('Company')
    expect(headingTexts).toContain('Support')
  })

  it('renders social media links with accessible labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders About section', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const headingTexts = headings.map((h) => h.textContent)
    expect(headingTexts).toContain('About')
    expect(screen.getByText(/far from the countries/i)).toBeInTheDocument()
  })
})
