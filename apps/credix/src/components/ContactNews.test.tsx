import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactNews } from './ContactNews'

describe('ContactNews', () => {
  it('renders contact heading and info', () => {
    render(<ContactNews />)
    expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByText(/3007 Sarah Drive/)).toBeInTheDocument()
    expect(screen.getByText('337-413-9538')).toBeInTheDocument()
    expect(screen.getByText('contact@yourbusiness.com')).toBeInTheDocument()
  })

  it('renders news section', () => {
    render(<ContactNews />)
    expect(screen.getByRole('heading', { name: 'The news' })).toBeInTheDocument()
    expect(screen.getByText('How to get the best loan online')).toBeInTheDocument()
    expect(screen.getByText('A new way to finance your dream home')).toBeInTheDocument()
    expect(screen.getByText('10 tips to get the best loan for you')).toBeInTheDocument()
  })
})
