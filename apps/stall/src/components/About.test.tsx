import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading, description, badge, and learn more button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Choose Us')
    expect(screen.getByText(/We have been serving customers/)).toBeInTheDocument()
    expect(screen.getByText('Trusted Merchant for 50 years')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about-more')
    expect(screen.getByRole('img', { name: 'About our store' })).toBeInTheDocument()
  })
})
