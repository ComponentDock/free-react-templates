import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchSection } from './SearchSection'

describe('SearchSection', () => {
  it('renders heading and search form', () => {
    render(<SearchSection />)

    expect(screen.getByText('Search your course')).toBeInTheDocument()
    expect(screen.getByLabelText('Course')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search Course' })).toBeInTheDocument()
  })

  it('allows typing in search inputs', async () => {
    const user = userEvent.setup()
    render(<SearchSection />)

    const courseInput = screen.getByLabelText('Course')
    const categoryInput = screen.getByLabelText('Category')

    await user.type(courseInput, 'React')
    await user.type(categoryInput, 'Web Development')

    expect(courseInput).toHaveValue('React')
    expect(categoryInput).toHaveValue('Web Development')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<SearchSection />)

    await user.click(screen.getByRole('button', { name: 'Search Course' }))
  })
})
