import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the split hero carousel section', () => {
    render(<App />)
    expect(screen.getByText(/Take your mobile photography/i)).toBeInTheDocument()
    expect(screen.getByText(/to the next level/i)).toBeInTheDocument()
  })

  it('renders three tab buttons', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: /TRAVEL/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /PHOTOGRAPHY/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /CREATIVITY/i })).toBeInTheDocument()
  })

  it('shows first tab content by default', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: /TRAVEL/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-first')
  })

  it('switches content when clicking second tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    const secondTab = screen.getByRole('tab', { name: /PHOTOGRAPHY/i })
    await user.click(secondTab)
    expect(secondTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-second')
  })

  it('switches content when clicking third tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    const thirdTab = screen.getByRole('tab', { name: /CREATIVITY/i })
    await user.click(thirdTab)
    expect(thirdTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-third')
  })

  it('navigates slides using prev/next buttons', async () => {
    const user = userEvent.setup()
    render(<App />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })

    // First slide active
    expect(screen.getByRole('tab', { name: /TRAVEL/i })).toHaveAttribute('aria-selected', 'true')

    // Click next → second slide
    await user.click(nextBtn)
    expect(screen.getByRole('tab', { name: /PHOTOGRAPHY/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )

    // Click prev (not at 0) → back to first
    await user.click(prevBtn)
    expect(screen.getByRole('tab', { name: /TRAVEL/i })).toHaveAttribute('aria-selected', 'true')

    // Click next → second → third
    await user.click(nextBtn)
    await user.click(nextBtn)
    expect(screen.getByRole('tab', { name: /CREATIVITY/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )

    // Click next → wraps to first
    await user.click(nextBtn)
    expect(screen.getByRole('tab', { name: /TRAVEL/i })).toHaveAttribute('aria-selected', 'true')

    // Click prev (at 0) → wraps to third
    await user.click(prevBtn)
    expect(screen.getByRole('tab', { name: /CREATIVITY/i })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('renders features section with cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Features & Highlights/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pro Photography Tips/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Instant Editing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Creative Filters/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Color Grading/i })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
