import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSearch } from './HeroSearch'

describe('HeroSearch', () => {
  it('renders the heading', () => {
    render(<HeroSearch />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/what are you looking for/i)
  })

  it('renders the search form with input and button', () => {
    render(<HeroSearch />)

    expect(screen.getByRole('form', { name: /search form/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('shows placeholder when input is empty', () => {
    render(<HeroSearch />)
    expect(screen.getByPlaceholderText('Type to search.')).toBeInTheDocument()
  })

  it('accepts text in the search input', async () => {
    const user = userEvent.setup()
    render(<HeroSearch />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'dress')
    expect(input).toHaveValue('dress')
  })

  it('submits without error', async () => {
    const user = userEvent.setup()
    render(<HeroSearch />)

    await user.click(screen.getByRole('button', { name: /search/i }))
  })

  it('has a search icon inside the button', () => {
    render(<HeroSearch />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders all five category links', () => {
    render(<HeroSearch />)

    const nav = screen.getByRole('navigation', { name: /categories/i })
    const links = nav.querySelectorAll('a')
    expect(links).toHaveLength(5)
  })

  it('renders correct category names', () => {
    render(<HeroSearch />)

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Ladies')).toBeInTheDocument()
    expect(screen.getByText('Mens')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('category links have correct href anchors', () => {
    render(<HeroSearch />)

    expect(screen.getByText('New Arrivals')).toHaveAttribute('href', '#new-arrivals')
    expect(screen.getByText('Ladies')).toHaveAttribute('href', '#ladies')
    expect(screen.getByText('Mens')).toHaveAttribute('href', '#mens')
    expect(screen.getByText('Accessories')).toHaveAttribute('href', '#accessories')
    expect(screen.getByText('Sale')).toHaveAttribute('href', '#sale')
  })

  it('has a full-bleed hero background', () => {
    render(<HeroSearch />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section).toHaveClass('min-h-screen')
  })
})
