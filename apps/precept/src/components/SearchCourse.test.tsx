import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchCourse } from './SearchCourse'

describe('SearchCourse', () => {
  it('renders search heading and input', () => {
    render(<SearchCourse />)
    expect(screen.getByText(/Search For Available Courses/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search courses/i)).toBeInTheDocument()
  })

  it('allows typing in search input', async () => {
    const user = userEvent.setup()
    render(<SearchCourse />)
    const input = screen.getByLabelText(/search courses/i)
    await user.type(input, 'design')
    expect(input).toHaveValue('design')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<SearchCourse />)
    const input = screen.getByLabelText(/search courses/i)
    await user.type(input, 'web dev')
    await user.click(screen.getByRole('button', { name: /submit search/i }))
    expect(input).toHaveValue('web dev')
  })
})
