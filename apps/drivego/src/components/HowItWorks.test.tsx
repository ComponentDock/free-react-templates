import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading, three numbered steps, and video link', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Select a car' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fill up form' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Payment' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Video how it works/i })).toBeInTheDocument()
  })

  it('renders the correct number of step cards', () => {
    render(<HowItWorks />)
    const numbers = ['01', '02', '03']
    for (const number of numbers) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
