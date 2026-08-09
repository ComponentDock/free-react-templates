import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, contact heading, and contact details', () => {
    render(<Footer />)
    expect(screen.getByText('Clutch')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us Now!' })).toBeInTheDocument()
    expect(screen.getByText('(+12) 345 678 910')).toBeInTheDocument()
    expect(screen.getByText('webmaster@free-templates.cc')).toBeInTheDocument()
    expect(screen.getAllByText(/625 Gloria Union, California, United States/)).toHaveLength(2)
  })

  it('renders the three link columns', () => {
    render(<Footer />)
    for (const title of ['Infomation', 'Cars', 'Top Brand']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    for (const link of [
      'Purchase',
      'Payment',
      'Shipping',
      'Return',
      'Hatchback',
      'Sedan',
      'SUV',
      'Crossover',
      'Abarth',
      'Acura',
      'Ferrari',
      'Honda',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders social links and the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })
})
