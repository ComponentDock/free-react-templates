import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the section title and View All Schedule button', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: 'Our Class' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Schedule' })).toBeInTheDocument()
  })

  it('displays the first class by default', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: 'Body Building' })).toBeInTheDocument()
    expect(screen.getByText(/sculpt, tone and strengthen/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Schedule' })).toBeInTheDocument()
  })

  it('shows 6 class tab buttons', () => {
    render(<Classes />)
    const tabs = screen.getAllByRole('button', { name: /^Switch to/ })
    expect(tabs).toHaveLength(6)
  })

  it('switches class content when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Classes />)

    const yogaTab = screen.getByRole('button', { name: 'Switch to Yoga Fitness' })
    await user.click(yogaTab)

    expect(screen.getByRole('heading', { name: 'Yoga Fitness' })).toBeInTheDocument()
    expect(screen.getByText(/Improve flexibility, balance/)).toBeInTheDocument()
  })

  it('highlights the active tab', async () => {
    const user = userEvent.setup()
    render(<Classes />)

    const defaultActive = screen.getByRole('button', { name: 'Switch to Body Building' })
    expect(defaultActive.className).toContain('ring-brand')

    await user.click(screen.getByRole('button', { name: 'Switch to Kick Boxing' }))

    const newActive = screen.getByRole('button', { name: 'Switch to Kick Boxing' })
    expect(newActive.className).toContain('ring-brand')
  })
})
