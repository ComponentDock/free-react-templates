import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading, a project slide, and slider controls', () => {
    render(<Portfolio />)
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Project Title/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous project/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next project/i })).toBeInTheDocument()
  })

  it('shows a See Case Study button on the visible slide', () => {
    render(<Portfolio />)
    expect(screen.getAllByRole('link', { name: 'See Case Study' }).length).toBeGreaterThan(0)
  })

  it('advances to the next project with the next button', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    const first = screen.getByRole('heading', { level: 3, name: /Project Title/ }).textContent
    await user.click(screen.getByRole('button', { name: /next project/i }))
    const second = screen.getByRole('heading', { level: 3, name: /Project Title/ }).textContent
    expect(second).not.toBe(first)
    await user.click(screen.getByRole('button', { name: /previous project/i }))
    expect(screen.getByRole('heading', { level: 3, name: /Project Title/ }).textContent).toBe(first)
  })
})
