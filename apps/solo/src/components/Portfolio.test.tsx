import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { portfolioFilters, portfolioIntro, portfolioItems } from '../data'

describe('Portfolio', () => {
  it('renders the title, all filter buttons and the six project items', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('heading', { name: /Our Latest Featured Projects/ }),
    ).toBeInTheDocument()
    for (const filter of portfolioFilters) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }
    for (const item of portfolioItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: portfolioIntro.cta })).toBeInTheDocument()
  })

  it('filters items when a category button is activated and highlights the active filter', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    const vectorItems = portfolioItems.filter((item) => item.category === 'Vector')

    await user.click(screen.getByRole('button', { name: 'Vector' }))

    for (const item of vectorItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
    const hidden = portfolioItems.filter((item) => item.category !== 'Vector')
    for (const item of hidden) {
      expect(screen.queryByText(item.title)).not.toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Vector' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'All' }))
    for (const item of portfolioItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
  })
})
