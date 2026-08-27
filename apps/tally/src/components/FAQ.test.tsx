import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/frequently asked/i)
  })

  it('renders all four FAQ items', () => {
    render(<FAQ />)
    expect(screen.getByText(/what services do you offer/i)).toBeInTheDocument()
    expect(screen.getByText(/how do you ensure accuracy/i)).toBeInTheDocument()
    expect(screen.getByText(/what industries do you serve/i)).toBeInTheDocument()
    expect(screen.getByText(/how can i get started/i)).toBeInTheDocument()
  })

  it('expands and collapses FAQ items on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstQuestion = screen.getByText(/what services do you offer/i)
    await user.click(firstQuestion)
    expect(screen.getByText(/we provide comprehensive/i)).toBeInTheDocument()
    // Click again to collapse
    await user.click(firstQuestion)
    expect(screen.queryByText(/we provide comprehensive/i)).not.toBeInTheDocument()
  })

  it('renders FAQ images', () => {
    render(<FAQ />)
    const imgs = screen.getAllByRole('img', { name: /faq/i })
    expect(imgs.length).toBeGreaterThanOrEqual(1)
  })
})
