import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('displays the purchase rate label', () => {
    render(<Hero />)
    expect(screen.getByText('Currently Purchase Rate')).toBeInTheDocument()
  })

  it('displays the price prominently', () => {
    render(<Hero />)
    expect(screen.getByText('$12,356')).toBeInTheDocument()
  })

  it('displays descriptive text', () => {
    render(<Hero />)
    expect(screen.getByText(/CoinWave is a cryptocurrency/)).toBeInTheDocument()
  })

  it('renders the Buy Bitcoin CTA', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Buy Bitcoin' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#convert')
    await user.click(cta)
  })
})
