import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders with default placeholder', () => {
    render(<SearchInput />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<SearchInput placeholder="Custom" />)
    expect(screen.getByPlaceholderText('Custom')).toBeInTheDocument()
  })

  it('has a search icon button with aria-label', () => {
    render(<SearchInput />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('has transparent background', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('bg-transparent')
  })

  it('has white text color', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('text-white')
  })

  it('has semi-transparent white bottom border', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('border-b-white/50')
  })

  it('has 2px bottom border', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('border-b-2')
  })

  it('has 50px height on mobile', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('h-[50px]')
  })

  it('has 80px height on desktop', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('md:h-[80px]')
  })

  it('has no outline on focus', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('outline-none')
  })

  it('has no shadow on focus', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('focus:shadow-none')
  })

  it('focus border becomes full white', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('focus:border-b-white')
  })

  it('hover border becomes full white', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('hover:border-b-white')
  })

  it('has left padding for icon on mobile', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('pl-[45px]')
  })

  it('has larger left padding for icon on desktop', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('md:pl-[70px]')
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<SearchInput onChange={onChange} />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    await user.type(input, 'test')
    expect(onChange).toHaveBeenCalledTimes(4)
    expect(onChange).toHaveBeenLastCalledWith('t')
  })

  it('calls onKeyDown when key is pressed', () => {
    const onKeyDown = vi.fn()
    render(<SearchInput onKeyDown={onKeyDown} />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onKeyDown).toHaveBeenCalledTimes(1)
  })

  it('accepts controlled value', () => {
    render(<SearchInput value="controlled" />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input).toHaveValue('controlled')
  })

  it('has input type text', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('has appropriate font size on mobile', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('text-base')
  })

  it('has larger font size on desktop', () => {
    render(<SearchInput />)
    const input = screen.getByPlaceholderText('What are you looking for?')
    expect(input.className).toContain('md:text-lg')
  })

  it('search icon has correct size on desktop', () => {
    const { container } = render(<SearchInput />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('md:h-[50px]')
    expect(svg?.className.baseVal).toContain('md:w-[50px]')
  })

  it('search icon has correct size on mobile', () => {
    const { container } = render(<SearchInput />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('h-[36px]')
    expect(svg?.className.baseVal).toContain('w-[36px]')
  })

  it('search icon has white color', () => {
    const { container } = render(<SearchInput />)
    const svg = container.querySelector('svg')
    expect(svg?.className.baseVal).toContain('text-white')
  })
})
