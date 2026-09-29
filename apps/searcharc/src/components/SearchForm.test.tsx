import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders the form with all three segments', () => {
    render(<SearchForm />)

    expect(screen.getByRole('combobox', { name: /search category/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /search keywords/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders all seven category options', () => {
    render(<SearchForm />)

    const select = screen.getByRole('combobox', { name: /search category/i })
    expect(select.querySelectorAll('option')).toHaveLength(7)
  })

  it('defaults to "All Categories" selected', () => {
    render(<SearchForm />)

    const select = screen.getByRole('combobox', { name: /search category/i }) as HTMLSelectElement
    expect(select.value).toBe('All Categories')
  })

  it('allows changing the category', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const select = screen.getByRole('combobox', { name: /search category/i }) as HTMLSelectElement
    await user.selectOptions(select, 'Development')

    expect(select.value).toBe('Development')
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const input = screen.getByRole('textbox', { name: /search keywords/i })
    await user.type(input, 'react templates')

    expect(input).toHaveValue('react templates')
  })

  it('has a placeholder in the text input', () => {
    render(<SearchForm />)

    expect(screen.getByPlaceholderText('Enter Keywords?')).toBeInTheDocument()
  })

  it('submits without error', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // No assertion needed — just ensuring no runtime error on submit
  })

  it('has the search icon inside the button', () => {
    render(<SearchForm />)

    const button = screen.getByRole('button', { name: /search/i })
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
