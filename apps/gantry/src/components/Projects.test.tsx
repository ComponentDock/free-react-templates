import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows the heading and the first three project cards', () => {
    render(<Projects />)

    const section = screen.getByRole('region', { name: 'Our Projects' })
    expect(
      within(section).getByRole('heading', { name: 'Explore Our Recent Projects' }),
    ).toBeInTheDocument()

    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(within(cards[0]!).getByText('Factory')).toBeInTheDocument()
    expect(within(cards[0]!).getByText('Building Refinery')).toBeInTheDocument()
    expect(within(cards[1]!).getByText('Steel Frame Assembly')).toBeInTheDocument()
    expect(within(cards[2]!).getByText('River Crossing Viaduct')).toBeInTheDocument()
    expect(within(section).queryByText('Processing Plant Upgrade')).not.toBeInTheDocument()
  })

  it('moves the carousel window with next and previous', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    const section = screen.getByRole('region', { name: 'Our Projects' })

    await user.click(screen.getByRole('button', { name: 'Next projects' }))
    expect(within(section).getByText('Processing Plant Upgrade')).toBeInTheDocument()
    expect(within(section).queryByText('Building Refinery')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next projects' }))
    expect(within(section).getByText('Building Refinery')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous projects' }))
    expect(within(section).getByText('Processing Plant Upgrade')).toBeInTheDocument()
  })
})
