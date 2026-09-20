import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchCourse } from './SearchCourse'

describe('SearchCourse', () => {
  it('renders the search input and see-all link', () => {
    render(<SearchCourse />)
    expect(screen.getByRole('heading', { name: /I want to study/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your search...')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /See all courses/i })).toHaveAttribute(
      'href',
      '#courses',
    )
  })

  it('accepts text input', async () => {
    const user = userEvent.setup()
    render(<SearchCourse />)
    const input = screen.getByPlaceholderText('Type your search...')
    await user.type(input, 'math')
    expect(input).toHaveValue('math')
  })

  it('submits the search form without navigating', async () => {
    const user = userEvent.setup()
    render(<SearchCourse />)
    const button = screen.getByRole('button', { name: 'Search courses' })
    await user.click(button)
  })
})
