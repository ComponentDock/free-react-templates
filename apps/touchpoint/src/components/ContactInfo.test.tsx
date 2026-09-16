import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact us heading', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders all four contact items', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('Phone:')).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
    expect(screen.getByText('Website:')).toBeInTheDocument()
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('renders four icon containers with circular backgrounds', () => {
    const { container } = render(<ContactInfo />)
    const iconContainers = container.querySelectorAll('.rounded-full')
    expect(iconContainers).toHaveLength(4)
  })
})
