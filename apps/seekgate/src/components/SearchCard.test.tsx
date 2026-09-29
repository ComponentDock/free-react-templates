import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchCard } from './SearchCard'

describe('SearchCard', () => {
  it('renders the main search input', () => {
    render(<SearchCard />)
    expect(screen.getByRole('textbox', { name: /search keywords/i })).toBeInTheDocument()
  })

  it('renders the advanced search heading', () => {
    render(<SearchCard />)
    expect(screen.getByText('Advanced Search')).toBeInTheDocument()
  })

  it('renders all filter dropdowns', () => {
    render(<SearchCard />)
    expect(screen.getByRole('combobox', { name: /accessories/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /color/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /size/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /sale/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /time/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /type/i })).toBeInTheDocument()
  })

  it('displays the result count', () => {
    render(<SearchCard />)
    expect(screen.getByText('108')).toBeInTheDocument()
    expect(screen.getByText('results')).toBeInTheDocument()
  })

  it('renders reset and search buttons', () => {
    render(<SearchCard />)
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchCard />)
    const input = screen.getByRole('textbox', { name: /search keywords/i })
    await user.type(input, 'shoes')
    expect(input).toHaveValue('shoes')
  })

  it('allows changing filter values', async () => {
    const user = userEvent.setup()
    render(<SearchCard />)
    const colorSelect = screen.getByRole('combobox', { name: /color/i })
    await user.selectOptions(colorSelect, 'Red')
    expect(colorSelect).toHaveValue('Red')
  })

  it('resets all fields when reset is clicked', async () => {
    const user = userEvent.setup()
    render(<SearchCard />)
    const input = screen.getByRole('textbox', { name: /search keywords/i })
    await user.type(input, 'test')
    expect(input).toHaveValue('test')

    await user.click(screen.getByRole('button', { name: /reset/i }))
    expect(input).toHaveValue('')
    expect(screen.getByRole('combobox', { name: /color/i })).toHaveValue('All')
    expect(screen.getByRole('combobox', { name: /size/i })).toHaveValue('All')
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<SearchCard />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // Form should not navigate or reload
    expect(screen.getByRole('form', { name: /search form/i })).toBeInTheDocument()
  })
})
