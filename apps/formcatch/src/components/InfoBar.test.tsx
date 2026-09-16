import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBar } from './InfoBar'

describe('InfoBar', () => {
  it('renders four info items', () => {
    render(<InfoBar />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('displays the address value', () => {
    render(<InfoBar />)
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
  })

  it('displays the phone value as a link', () => {
    render(<InfoBar />)
    const phoneLink = screen.getByText('+ 1235 2355 98')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1235235598')
  })

  it('displays the email value as a link', () => {
    render(<InfoBar />)
    const emailLink = screen.getByText('info@yoursite.com')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
  })

  it('displays the website value as a link', () => {
    render(<InfoBar />)
    const websiteLink = screen.getByText('yoursite.com')
    expect(websiteLink).toHaveAttribute('href', 'https://yoursite.com')
  })

  it('renders circular teal icon containers', () => {
    const { container } = render(<InfoBar />)
    const iconContainers = container.querySelectorAll('.rounded-full.bg-brand')
    expect(iconContainers.length).toBe(4)
  })
})
