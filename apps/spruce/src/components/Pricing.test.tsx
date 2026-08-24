import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Build beautiful, feature-complete websites.',
    )
  })

  it('renders Yearly and Monthly tabs', () => {
    render(<Pricing />)
    expect(screen.getByRole('button', { name: 'Yearly' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Monthly' })).toBeInTheDocument()
  })

  it('defaults to yearly pricing showing 20', () => {
    render(<Pricing />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.queryByText('05')).not.toBeInTheDocument()
  })

  it('switches to monthly pricing showing 05 when Monthly tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    await user.click(screen.getByRole('button', { name: 'Monthly' }))
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(screen.queryByText('20')).not.toBeInTheDocument()
  })

  it('switches back to yearly pricing when Yearly tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    await user.click(screen.getByRole('button', { name: 'Monthly' }))
    expect(screen.getByText('05')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Yearly' }))
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.queryByText('05')).not.toBeInTheDocument()
  })

  it('renders "Start Free Trial" button', () => {
    render(<Pricing />)
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
  })
})
