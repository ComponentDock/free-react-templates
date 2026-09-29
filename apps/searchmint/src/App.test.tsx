import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { SearchForm } from './components/SearchForm'

describe('SearchMint', () => {
  describe('Page layout', () => {
    it('renders the page with a heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find What You Need')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('SearchMint — Minimal Search Bar')
    })

    it('has a light background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-searchmint-bg')
    })

    it('renders the search form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })
  })

  describe('Heading styling', () => {
    it('renders heading with Poppins font', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.className).toContain('font-sans')
    })

    it('renders heading with 28px font size', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.className).toContain('text-[28px]')
    })

    it('renders heading with normal font weight', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.className).toContain('font-normal')
    })

    it('renders heading with black text color', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.className).toContain('text-black')
    })
  })

  describe('Search input', () => {
    it('renders a search input with placeholder', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    })

    it('has white background', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('bg-searchmint-input-bg')
    })

    it('has 50px height', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('h-[50px]')
    })

    it('has 2px border radius', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('rounded-[2px]')
    })

    it('has no visible border', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('border-none')
    })

    it('has a subtle box shadow', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input.className).toContain('shadow-[0_5px_20px_-12px_rgba(0,0,0,0.2)]')
    })
  })

  describe('Search button', () => {
    it('renders a search button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    })

    it('has mint-green background', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('bg-searchmint-brand')
    })

    it('has white text', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('text-white')
    })

    it('is 90px wide', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('w-[90px]')
    })

    it('is 50px tall', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('h-[50px]')
    })

    it('has 2px border radius', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('rounded-[2px]')
    })

    it('has a subtle box shadow', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.className).toContain('shadow-[0_5px_20px_-12px_rgba(0,0,0,0.34)]')
    })
  })

  describe('Search form layout', () => {
    it('input and button are in a flex row', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: 'Search form' })
      expect(form.className).toContain('flex')
      expect(form.className).toContain('items-center')
    })

    it('form is centered with max-width', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: 'Search form' })
      expect(form.className).toContain('w-full')
      expect(form.className).toContain('justify-between')
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

    it('calls onSearch callback with trimmed query on submit', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchForm onSearch={onSearch} />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, 'dashboard')
      await user.keyboard('{Enter}')
      expect(onSearch).toHaveBeenCalledWith('dashboard')
    })

    it('does not call onSearch when query is empty', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchForm onSearch={onSearch} />)
      await user.keyboard('{Enter}')
      expect(onSearch).not.toHaveBeenCalled()
    })

    it('trims whitespace before calling onSearch', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchForm onSearch={onSearch} />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, '  hello  ')
      await user.keyboard('{Enter}')
      expect(onSearch).toHaveBeenCalledWith('hello')
    })

    it('does not submit when input is only whitespace', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<SearchForm onSearch={onSearch} />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, '   ')
      await user.keyboard('{Enter}')
      expect(onSearch).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('search input has an associated aria-label', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      expect(input).toHaveAttribute('aria-label', 'Search...')
    })

    it('search button is a semantic button element', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      expect(btn.tagName).toBe('BUTTON')
    })

    it('heading uses a semantic heading tag', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.tagName).toBe('H1')
    })

    it('form has an accessible label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
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

    it('displays the copyright text', () => {
      render(<App />)
      expect(screen.getByText(/SearchMint/)).toBeInTheDocument()
    })
  })
})
