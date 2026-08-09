import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the centered logo and the about widget with payment icons', () => {
    render(<Footer />)
    expect(screen.getByText('Modish')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByText(/donec vitae purus nunc/i)).toBeInTheDocument()
  })

  it('renders the question link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /questions/i })).toBeInTheDocument()
    for (const item of [
      'About Us',
      'Track Orders',
      'Returns',
      'Jobs',
      'Shipping',
      'Blog',
      'Partners',
      'Bloggers',
      'Support',
      'Terms of Use',
      'Press',
    ]) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('renders the latest posts with dates and read-more links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /latest posts/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'what shoes to wear' })).toBeInTheDocument()
    expect(screen.getByText('Oct 21, 2018')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'trends this year' })).toBeInTheDocument()
    expect(screen.getByText('Oct 10, 2018')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(2)
  })

  it('renders the contact widget with letter marks', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByText('C.')).toBeInTheDocument()
    expect(screen.getByText('Your Company Ltd')).toBeInTheDocument()
    expect(screen.getByText('B.')).toBeInTheDocument()
    expect(screen.getByText(/1481 Creekside Lane/i)).toBeInTheDocument()
    expect(screen.getByText('T.')).toBeInTheDocument()
    expect(screen.getByText('+53 345 7953 32453')).toBeInTheDocument()
    expect(screen.getByText('E.')).toBeInTheDocument()
    expect(screen.getByText('office@youremail.com')).toBeInTheDocument()
  })

  it('renders the social strip with seven brand links', () => {
    render(<Footer />)
    for (const label of [
      'Instagram',
      'Google Plus',
      'Pinterest',
      'Facebook',
      'Twitter',
      'YouTube',
      'Tumblr',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Modish — Free React Template`),
    ).toBeInTheDocument()
  })
})
