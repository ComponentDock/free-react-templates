import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProgressPaginationShowcase } from './ProgressPaginationShowcase'

describe('ProgressPaginationShowcase', () => {
  it('renders the labeled progress bars with their fills', () => {
    const { container } = render(<ProgressPaginationShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Progress bars' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: '40% Complete' })).toHaveAttribute(
      'aria-valuenow',
      '40',
    )
    expect(screen.getByRole('progressbar', { name: '60% Complete' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: '70% Complete' })).toBeInTheDocument()

    const bars = Array.from(container.querySelectorAll('[role="progressbar"] > div'))
    expect(bars[0]!.className).toContain('bg-primary-500')
    expect(bars[1]!.className).toContain('bg-info')
    expect(bars[2]!.className).toContain('bg-warning')

    const stacked = Array.from(container.querySelectorAll('div[class*="bg-track"] > div'))
    expect(stacked).toHaveLength(6)
    expect(screen.getByText('35% Complete (success)')).toBeInTheDocument()
    expect(screen.getByText('20% Complete (warning)')).toBeInTheDocument()
    expect(screen.getByText('30% Complete (danger)')).toBeInTheDocument()
  })

  it('steps the first pagination row through its pages', async () => {
    render(<ProgressPaginationShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Paginations' })).toBeInTheDocument()
    const three = screen.getByRole('button', { name: 'Page one 3' })
    await userEvent.click(three)

    expect(three).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Page one 1' })).not.toHaveAttribute('aria-current')

    await userEvent.click(screen.getByRole('button', { name: 'Previous page one' }))
    expect(screen.getByRole('button', { name: 'Page one 2' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous page one' }))
    await userEvent.click(screen.getByRole('button', { name: 'Previous page one' }))
    expect(screen.getByRole('button', { name: 'Page one 1' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    for (let step = 0; step < 5; step += 1) {
      await userEvent.click(screen.getByRole('button', { name: 'Next page one' }))
    }
    expect(screen.getByRole('button', { name: 'Page one 5' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('steps the second pagination row through its pages', async () => {
    render(<ProgressPaginationShowcase />)

    expect(screen.getByRole('button', { name: 'Page two 2' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('button', { name: 'Page two 3' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByRole('button', { name: 'Page two 2' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Page two 7' }))
    await userEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('button', { name: 'Page two 7' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }))
    await userEvent.click(screen.getByRole('button', { name: 'Page two 1' }))
    await userEvent.click(screen.getByRole('button', { name: 'Previous' }))
    expect(screen.getByRole('button', { name: 'Page two 1' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
