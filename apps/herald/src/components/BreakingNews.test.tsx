import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BreakingNews } from './BreakingNews'
import { breakingHeadline, breakingLabel, searchPlaceholder } from '../data'

describe('BreakingNews', () => {
  it('shows the red BREAKING NEWS tag and the ticker headline link', () => {
    render(<BreakingNews />)
    const tag = screen.getByRole('link', { name: breakingLabel })
    expect(tag).toHaveClass('bg-accent')
    expect(screen.getByRole('link', { name: breakingHeadline })).toBeInTheDocument()
  })

  it('shows a search form with input and icon button', () => {
    render(<BreakingNews />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchPlaceholder })).toBeInTheDocument()
  })

  it('submits the search form without crashing', async () => {
    const user = userEvent.setup()
    render(<BreakingNews />)
    await user.type(screen.getByPlaceholderText(searchPlaceholder), 'elections')
    await user.click(screen.getByRole('button', { name: searchPlaceholder }))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
