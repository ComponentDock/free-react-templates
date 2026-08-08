import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first page of quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Jennifer Martinez')).toBeInTheDocument()
    expect(screen.getByText('David Thompson')).toBeInTheDocument()
    expect(screen.getByText('Patricia Chen')).toBeInTheDocument()
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('cycles forward through the quote pages', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('David Thompson')).toBeInTheDocument()
    expect(screen.queryByText('Jennifer Martinez')).not.toBeInTheDocument()
    expect(screen.getByText('2 / 4')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('Sarah Nguyen')).toBeInTheDocument()
    expect(screen.getByText('4 / 4')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('1 / 4')).toBeInTheDocument()
  })

  it('wraps backward from the first page to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonials' }))
    expect(screen.getByText('4 / 4')).toBeInTheDocument()
    expect(screen.getByText('Michael Rodriguez')).toBeInTheDocument()
    expect(screen.queryByText('Jennifer Martinez')).not.toBeInTheDocument()
  })
})
