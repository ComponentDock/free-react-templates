import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the section title', () => {
    render(<Programs />)
    expect(screen.getByText('Popular Programs')).toBeInTheDocument()
  })

  it('renders all four tabs', () => {
    render(<Programs />)
    expect(screen.getByRole('button', { name: 'Graduate' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Postgraduate' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'PhD Scholarships' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Training' })).toBeInTheDocument()
  })

  it('shows Graduate programs by default', () => {
    render(<Programs />)
    expect(screen.getByText('Chemical Engineering')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
    expect(screen.getByText('Bio Engineering')).toBeInTheDocument()
  })

  it('switches to Postgraduate tab on click', async () => {
    const user = userEvent.setup()
    render(<Programs />)
    await user.click(screen.getByRole('button', { name: 'Postgraduate' }))
    expect(screen.getByText('MBA Program')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
  })

  it('switches to PhD tab on click', async () => {
    const user = userEvent.setup()
    render(<Programs />)
    await user.click(screen.getByRole('button', { name: 'PhD Scholarships' }))
    expect(screen.getByText('Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Environmental Studies')).toBeInTheDocument()
  })

  it('switches to Training tab on click', async () => {
    const user = userEvent.setup()
    render(<Programs />)
    await user.click(screen.getByRole('button', { name: 'Training' }))
    expect(screen.getByText('Leadership Skills')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  })

  it('renders Apply Now buttons for each program card', () => {
    render(<Programs />)
    const applyBtns = screen.getAllByText('Apply Now')
    expect(applyBtns.length).toBeGreaterThanOrEqual(3)
  })
})
