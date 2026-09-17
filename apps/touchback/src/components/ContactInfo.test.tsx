import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact Us heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders the description paragraph', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('displays the address contact item', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/34 Street Name/)).toBeInTheDocument()
  })

  it('displays the phone contact item', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/\+1 \(222\) 345 6789/)).toBeInTheDocument()
  })

  it('displays the email contact item', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/info@mywebsite\.com/)).toBeInTheDocument()
  })

  it('renders three contact items', () => {
    render(<ContactInfo />)
    const items = screen.getAllByText(/34 Street Name|\+1 \(222\) 345 6789|info@mywebsite\.com/)
    expect(items).toHaveLength(3)
  })
})
