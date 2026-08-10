import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders a dark photo-overlay bar with social icons on the left', () => {
    render(<TopBar />)

    const bar = screen.getByRole('region', { name: 'Social header' })
    expect(bar).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders a search form on the right', () => {
    render(<TopBar />)

    const search = screen.getByRole('searchbox', { name: 'Search' })
    expect(search).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit search' })).toBeInTheDocument()
  })

  it('submits the search form without navigating away', async () => {
    const user = userEvent.setup()
    render(<TopBar />)

    await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'pasta')
    await user.click(screen.getByRole('button', { name: 'Submit search' }))

    expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveValue('pasta')
  })

  it('clears the search box when the user clicks the clear button', async () => {
    const user = userEvent.setup()
    render(<TopBar />)

    const input = screen.getByRole('searchbox', { name: 'Search' })
    await user.type(input, 'pasta')
    expect(input).toHaveValue('pasta')

    await user.click(screen.getByRole('button', { name: 'Clear search' }))
    expect(input).toHaveValue('')
  })
})
