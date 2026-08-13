import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Works } from './Works'

describe('Works', () => {
  it('renders the section title, intro and filter tabs', () => {
    render(<Works />)
    expect(screen.getByRole('heading', { name: 'Latest Works' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All Categories' })).toHaveClass('bg-brand')
    for (const tab of [
      'Branding',
      'Creative Work',
      'Web Design',
      '2D Vinyl Design',
      'Client Project',
    ]) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('renders six project cards with images', () => {
    const { container } = render(<Works />)
    const grid = container.querySelector('.work-grid')
    expect(grid!.querySelectorAll('img')).toHaveLength(6)
    expect(within(grid as HTMLElement).getAllByText('2D Vinyl Design')).toHaveLength(3)
    expect(within(grid as HTMLElement).getAllByText('Client Project')).toHaveLength(3)
  })

  it('prevents default navigation on card clicks', () => {
    const { container } = render(<Works />)
    const card = container.querySelector('.work-grid a')!
    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    card.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
  })

  it('filters cards when a tab is selected', async () => {
    const user = userEvent.setup()
    const { container } = render(<Works />)
    const grid = container.querySelector('.work-grid') as HTMLElement
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getByRole('button', { name: 'Branding' })).toHaveClass('bg-brand')
    expect(within(grid).getAllByText('Client Project')).toHaveLength(2)
    expect(within(grid).queryByText('2D Vinyl Design')).not.toBeInTheDocument()
  })

  it('shows all cards again after selecting All Categories', async () => {
    const user = userEvent.setup()
    const { container } = render(<Works />)
    const grid = container.querySelector('.work-grid') as HTMLElement
    await user.click(screen.getByRole('button', { name: 'Creative Work' }))
    expect(within(grid).queryByText('Client Project')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'All Categories' }))
    expect(within(grid).getAllByText('2D Vinyl Design')).toHaveLength(3)
    expect(within(grid).getAllByText('Client Project')).toHaveLength(3)
  })
})
