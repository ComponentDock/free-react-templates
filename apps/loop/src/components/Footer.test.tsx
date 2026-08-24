import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact info, sources, links, social icons, and Component Dock credit', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('43 Raymouth Rd. Baltemoer, London 3910')).toBeInTheDocument()
    expect(screen.getByText('+1(123)-456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@mydomain.com')).toBeInTheDocument()
    expect(screen.getByText('Sources')).toBeInTheDocument()
    expect(screen.getAllByText('About us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
