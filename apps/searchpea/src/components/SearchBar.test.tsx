import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders a pill-shaped card', () => {
    const { container } = render(<SearchBar />)
    const card = container.querySelector('[data-testid="search-card"]')
    expect(card).toBeInTheDocument()
    expect(card?.className).toContain('rounded-[34px]')
    expect(card?.className).toContain('shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]')
    expect(card?.className).toContain('overflow-hidden')
  })

  it('renders the search input with default placeholder', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('renders input with mint green background area', () => {
    const { container } = render(<SearchBar />)
    const inputArea = container.querySelector('[data-testid="input-area"]')
    expect(inputArea).toBeInTheDocument()
    expect(inputArea?.className).toContain('bg-searchpea-mint')
  })

  it('renders a magnifying glass icon', () => {
    const { container } = render(<SearchBar />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('magnifying glass icon has correct color class', () => {
    const { container } = render(<SearchBar />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('text-searchpea-icon')
  })

  it('magnifying glass icon is 36x36 on desktop', () => {
    const { container } = render(<SearchBar />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('md:h-[36px]')
    expect(svg?.className.baseVal).toContain('md:w-[36px]')
  })

  it('magnifying glass icon is 26x26 on mobile', () => {
    const { container } = render(<SearchBar />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-[26px]')
    expect(svg?.className.baseVal).toContain('w-[26px]')
  })

  it('input has dark text color', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('text-black')
  })

  it('input has no visible border', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('border-0')
  })

  it('input has 16px font size', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('text-base')
  })

  it('input height is 68px on desktop', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('md:h-[68px]')
  })

  it('input height is 50px on tablet', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('h-[50px]')
  })

  it('renders a SEARCH button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('SEARCH button has green background', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('bg-searchpea-green')
  })

  it('SEARCH button text is white', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('text-white')
  })

  it('SEARCH button text is uppercase', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('uppercase')
  })

  it('SEARCH button has minimum width 216px on desktop', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('md:min-w-[216px]')
  })

  it('SEARCH button has minimum width 100px on mobile', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('min-w-[100px]')
  })

  it('SEARCH button has font weight 300', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('font-light')
  })

  it('SEARCH button has font size 16px on desktop', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('md:text-base')
  })

  it('SEARCH button has font size 13px on mobile', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('text-[13px]')
  })

  it('SEARCH button has hover dark green background', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('hover:bg-searchpea-green-dark')
  })

  it('SEARCH button has smooth transition', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.className).toContain('transition-all')
    expect(button.className).toContain('duration-200')
  })

  it('calls onSubmit when SEARCH button is clicked', () => {
    const onSubmit = vi.fn()
    render(<SearchBar onSubmit={onSubmit} />)
    const button = screen.getByRole('button', { name: /search/i })
    button.click()
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('calls onChange when typing in search input', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<SearchBar onChange={onChange} />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    await user.type(input, 'abc')
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('accepts controlled value', () => {
    render(<SearchBar value="controlled" />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input).toHaveValue('controlled')
  })

  it('input wrapper has min-width 80px on desktop', () => {
    const { container } = render(<SearchBar />)
    const iconWrapper = container.querySelector('[data-testid="icon-wrapper"]')
    expect(iconWrapper?.className).toContain('md:min-w-[80px]')
  })

  it('input wrapper has min-width 40px on mobile', () => {
    const { container } = render(<SearchBar />)
    const iconWrapper = container.querySelector('[data-testid="icon-wrapper"]')
    expect(iconWrapper?.className).toContain('min-w-[40px]')
  })

  it('search input has aria-label', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('SEARCH button is focusable via keyboard', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button).not.toHaveAttribute('tabindex', '-1')
  })

  it('search input has no focus outline', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('outline-none')
  })
})
