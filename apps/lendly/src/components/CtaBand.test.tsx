import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading with the orange brand word and subline', () => {
    render(<CtaBand />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Already have a LENDLY Bank Loan?')
    const brandWord = screen.getByText('LENDLY')
    expect(brandWord.className).toContain('text-brand')
  })

  it('renders the Find out More pill', () => {
    render(<CtaBand />)
    expect(screen.getByRole('link', { name: 'Find out More' })).toHaveAttribute('href', '#help')
  })
})
