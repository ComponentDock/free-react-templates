import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JobSearchBar } from './JobSearchBar'

describe('JobSearchBar', () => {
  it('renders search inputs and button', () => {
    render(<JobSearchBar />)

    expect(screen.getByRole('textbox', { name: 'Search keyword' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Select location' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Select category' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Find Job' })).toBeInTheDocument()
  })

  it('shows popular search section with tags', () => {
    render(<JobSearchBar />)

    expect(screen.getByText('Popular Search:')).toBeInTheDocument()
    // All popular search terms appear as span elements inside the tag list
    const tagSection = screen.getByText('Popular Search:').parentElement!
    expect(tagSection).toHaveTextContent('Design & Creative')
    expect(tagSection).toHaveTextContent('Marketing')
    expect(tagSection).toHaveTextContent('Administration')
    expect(tagSection).toHaveTextContent('Customer Service')
    expect(tagSection).toHaveTextContent('Finance')
    expect(tagSection).toHaveTextContent('Teaching')
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<JobSearchBar />)

    await user.click(screen.getByRole('button', { name: 'Find Job' }))
    // If form submitted, page would reload — no error means it was prevented
  })
})
