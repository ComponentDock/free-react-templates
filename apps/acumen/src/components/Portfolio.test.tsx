import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('shows all filter tabs', () => {
    render(<Portfolio />)
    const categories = ['All', 'Graphics', 'UI/UX', 'Web Design', 'Coding', 'Developing']
    for (const cat of categories) {
      expect(screen.getByRole('tab', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all items when All is active', () => {
    render(<Portfolio />)
    const items = screen.getAllByRole('tab', { name: /All/ })
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(9)
  })

  it('filters to Graphics items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('tab', { name: 'Graphics' }))
    expect(screen.getByRole('tab', { name: 'Graphics' })).toHaveAttribute('aria-selected', 'true')
  })

  it('filters to UI/UX items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('tab', { name: 'UI/UX' }))
    expect(screen.getByRole('tab', { name: 'UI/UX' })).toHaveAttribute('aria-selected', 'true')
  })
})
