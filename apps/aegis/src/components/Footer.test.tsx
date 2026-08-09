import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, socials, link columns, contact info and legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Aegis home' })).toBeInTheDocument()
    expect(
      screen.getByText(/Advanced threat protection platform for modern teams/),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Solutions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Endpoint Protection' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cloud Security' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Identity Protection' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Threat Intelligence' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Documentation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Security Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Threat Reports' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Webinars' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Partners' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(555) 567-8901' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'security@aegis.io' })).toBeInTheDocument()
    expect(screen.getByText('1200 Cyber Defense Blvd')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Style Guide' })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Aegis`))).toBeInTheDocument()
  })
})
