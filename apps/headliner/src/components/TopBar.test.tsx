import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders a search input with placeholder', () => {
    render(<TopBar />)
    const input = screen.getByPlaceholderText('Search Your Interest...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('allows typing into the search input', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    const input = screen.getByPlaceholderText('Search Your Interest...')
    await user.type(input, 'fashion')
    expect(input).toHaveValue('fashion')
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })
})
