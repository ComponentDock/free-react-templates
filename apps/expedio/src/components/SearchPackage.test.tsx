import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchPackage } from './SearchPackage'

describe('SearchPackage', () => {
  it('renders the heading', () => {
    render(<SearchPackage />)
    expect(screen.getByText(/Search suitable and affordable plan/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<SearchPackage />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the form title', () => {
    render(<SearchPackage />)
    expect(screen.getByRole('heading', { name: 'Search Package' })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<SearchPackage />)
    expect(screen.getByPlaceholderText('Where do you want to go?')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Category')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Tour duration')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Price range')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search Package' })).toBeInTheDocument()
  })

  it('allows selecting category', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)

    const category = screen.getByDisplayValue('Category')
    await user.selectOptions(category, 'adventure')
    expect(category).toHaveValue('adventure')
  })

  it('allows selecting duration', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)

    const duration = screen.getByDisplayValue('Tour duration')
    await user.selectOptions(duration, '5')
    expect(duration).toHaveValue('5')
  })

  it('allows selecting price range', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)

    const price = screen.getByDisplayValue('Price range')
    await user.selectOptions(price, 'luxury')
    expect(price).toHaveValue('luxury')
  })

  it('allows typing in search input', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)

    const input = screen.getByPlaceholderText('Where do you want to go?')
    await user.type(input, 'Paris')
    expect(input).toHaveValue('Paris')
  })

  it('allows selecting a date', async () => {
    render(<SearchPackage />)

    const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
    fireEvent.change(dateInput, { target: { value: '2025-01-15' } })
    expect(dateInput.value).toBe('2025-01-15')
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)

    await user.click(screen.getByRole('button', { name: 'Search Package' }))
  })
})
