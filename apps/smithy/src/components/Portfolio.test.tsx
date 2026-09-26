import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /quality work/i })).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)
    for (const tab of ['all', 'popular', 'latest', 'following', 'upcoming']) {
      expect(screen.getByRole('button', { name: new RegExp(tab, 'i') })).toBeInTheDocument()
    }
  })

  it('renders all 6 portfolio items by default', () => {
    render(<Portfolio />)
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByText('Project Zeta')).toBeInTheDocument()
  })

  it('filters items when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /popular/i }))
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByText('Project Delta')).toBeInTheDocument()
    expect(screen.queryByText('Project Beta')).not.toBeInTheDocument()
  })

  it('shows all items when "all" tab is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /popular/i }))
    expect(screen.queryByText('Project Beta')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /all/i }))
    expect(screen.getByText('Project Beta')).toBeInTheDocument()
  })

  it('renders portfolio images', () => {
    render(<Portfolio />)
    expect(screen.getByAltText('Project Alpha')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/smithy-p1/600/400',
    )
  })
})
