import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Recent Completed Projects')).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Projects />)
    expect(screen.getByRole('tab', { name: /all categories/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /branding/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /creative work/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /web design/i })).toBeInTheDocument()
  })

  it('shows all six projects by default', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })

  it('filters projects when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    // Click "Creative Work" tab
    await user.click(screen.getByRole('tab', { name: /creative work/i }))
    // Projects with Creative Work: proj-2, proj-3, proj-5, proj-6 = 4
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('shows all projects when All Categories is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('tab', { name: /branding/i }))
    await user.click(screen.getByRole('tab', { name: /all categories/i }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('tabs have correct aria-selected', () => {
    render(<Projects />)
    expect(screen.getByRole('tab', { name: /all categories/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: /branding/i })).toHaveAttribute('aria-selected', 'false')
  })
})
