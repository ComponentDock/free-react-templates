import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders all filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Photography' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Online Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Digital Media' })).toBeInTheDocument()
  })

  it('renders all project cards by default', () => {
    render(<Portfolio />)
    expect(screen.getByText('Project One')).toBeInTheDocument()
    expect(screen.getByText('Project Two')).toBeInTheDocument()
    expect(screen.getByText('Project Six')).toBeInTheDocument()
  })

  it('filters projects when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Photography' }))
    expect(screen.getByText('Project Two')).toBeInTheDocument()
    expect(screen.queryByText('Project One')).not.toBeInTheDocument()
  })

  it('shows all projects when All is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Photography' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Project One')).toBeInTheDocument()
    expect(screen.getByText('Project Two')).toBeInTheDocument()
  })
})
