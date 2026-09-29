import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { SearchBar } from './components/SearchBar'

describe('SearchGate', () => {
  describe('Page layout', () => {
    it('renders the page with a heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SearchGate')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('SearchGate — Animated Search Form')
    })

    it('has a light background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-searchgate-bg')
    })

    it('renders the search form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })
  })

  describe('Search button', () => {
    it('renders a circular search button', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn).toBeInTheDocument()
    })

    it('has circular shape (rounded-full)', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('rounded-full')
    })

    it('has the brand color background', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('bg-searchgate-brand')
    })
  })

  describe('Search input', () => {
    it('renders a search input with placeholder', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    })

    it('starts in a collapsed state (narrow width)', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('w-[150px]')
    })

    it('has pill-shaped border radius', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('rounded-full')
    })

    it('is white background', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('bg-searchgate-input-bg')
    })
  })

  describe('Expand on focus', () => {
    it('expands input width on focus', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('w-[150px]')
      await user.click(input)
      expect(input.className).toContain('w-[300px]')
    })

    it('collapses input when clicking outside', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      await user.click(input)
      expect(input.className).toContain('w-[300px]')
      await user.click(document.body as HTMLElement)
      expect(input.className).toContain('w-[150px]')
    })
  })

  describe('Form behavior', () => {
    it('allows typing in the search input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, 'react templates')
      expect(input).toHaveValue('react templates')
    })

    it('prevents form submission with empty input on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      await user.keyboard('{Enter}')
      expect(input).toHaveValue('')
    })

    it('does not submit when input is only whitespace', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, '   ')
      await user.keyboard('{Enter}')
      expect(input).toHaveValue('   ')
    })

    it('calls onSearch callback with trimmed query on submit', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchBar onSearch={onSearch} />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, 'dashboard')
      await user.keyboard('{Enter}')
      expect(onSearch).toHaveBeenCalledWith('dashboard')
    })

    it('does not call onSearch when query is empty', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchBar onSearch={onSearch} />)
      await user.keyboard('{Enter}')
      expect(onSearch).not.toHaveBeenCalled()
    })

    it('trims whitespace before calling onSearch', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchBar onSearch={onSearch} />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, '  hello  ')
      await user.keyboard('{Enter}')
      expect(onSearch).toHaveBeenCalledWith('hello')
    })
  })

  describe('Footer', () => {
    it('renders the footer', () => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })

    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Component Dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
