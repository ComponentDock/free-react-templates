import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the Procedure subheading and How It Works? heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Procedure')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How It Works?' })).toBeInTheDocument()
  })

  it('renders four numbered steps with photos, titles, and Learn More links', () => {
    render(<HowItWorks />)

    for (const title of ['Trusted Services', 'Natural Ways', 'Routine Exercise', 'Success/Goal']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(document.querySelectorAll('article img').length).toBe(4)
    for (const n of ['1', '2', '3', '4']) {
      expect(screen.getByText(n)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Learn More' }).length).toBe(4)
  })
})
