import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the Why Choose Us heading', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Why Choose Us' })).toBeInTheDocument()
  })

  it('renders all three FAQ items', () => {
    render(<Faq />)
    expect(screen.getByText('Certified Experience')).toBeInTheDocument()
    expect(screen.getByText('The Great Teamwork')).toBeInTheDocument()
    expect(screen.getByText('Modern Technology')).toBeInTheDocument()
  })

  it('starts with the first item expanded', () => {
    render(<Faq />)
    expect(screen.getByText(/Nam libero tempore/)).toBeInTheDocument()
  })

  it('expands and collapses items on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const teamworkBtn = screen.getByRole('button', { name: /The Great Teamwork/i })
    await user.click(teamworkBtn)
    expect(screen.getByText(/Temporibus autem/)).toBeInTheDocument()
    // First item should collapse
    expect(screen.queryByText(/Nam libero tempore/)).not.toBeInTheDocument()
  })

  it('collapses an item when clicking again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstBtn = screen.getByRole('button', { name: /Certified Experience/i })
    await user.click(firstBtn)
    expect(screen.queryByText(/Nam libero tempore/)).not.toBeInTheDocument()
  })

  it('has correct aria-expanded attributes', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstBtn = screen.getByRole('button', { name: /Certified Experience/i })
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(firstBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
  })
})
