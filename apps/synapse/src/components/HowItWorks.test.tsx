import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and the three feature tiles', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { name: 'How It work for you' })).toBeInTheDocument()
    for (const title of ['Easy to use', 'Unlimited Colors', 'Unique Features']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
