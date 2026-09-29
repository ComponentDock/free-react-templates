import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Seekbar', () => {
  describe('Page layout', () => {
    it('renders the search bar', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
    })

    it('renders the category dropdown', () => {
      render(<App />)
      expect(screen.getByRole('combobox', { name: 'Category' })).toBeInTheDocument()
    })

    it('renders the search button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Seekbar — Search Form Bar')
    })

    it('renders a background image element', () => {
      const { container } = render(<App />)
      const bgDiv = container.querySelector('[aria-hidden="true"]')
      expect(bgDiv).toBeInTheDocument()
    })
  })

  describe('Search form', () => {
    it('has a form element with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('search input has accessible label', () => {
      render(<App />)
      expect(screen.getByRole('textbox', { name: 'Search query' })).toBeInTheDocument()
    })

    it('allows typing in the search input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByRole('textbox', { name: 'Search query' })
      await user.type(input, 'modern furniture')
      expect(input).toHaveValue('modern furniture')
    })

    it('prevents form submission on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByRole('textbox', { name: 'Search query' })
      await user.type(input, 'query{Enter}')
      expect(input).toHaveValue('query')
    })

    it('calls onSearch with query and category on submit', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<App onSearch={onSearch} />)
      const input = screen.getByRole('textbox', { name: 'Search query' })
      await user.type(input, 'modern furniture')
      await user.click(screen.getByRole('button', { name: 'Search' }))
      expect(onSearch).toHaveBeenCalledWith('modern furniture', 'All Categories')
    })
  })

  describe('Category dropdown', () => {
    it('defaults to All Categories', () => {
      render(<App />)
      const select = screen.getByRole('combobox', { name: 'Category' })
      expect(select).toHaveValue('All Categories')
    })

    it('contains all category options', () => {
      render(<App />)
      const select = screen.getByRole('combobox', { name: 'Category' })
      const options = Array.from(select.querySelectorAll('option'))
      expect(options).toHaveLength(6)
      expect(options.map((o) => o.textContent)).toContain('Furniture')
      expect(options.map((o) => o.textContent)).toContain('Electronics')
      expect(options.map((o) => o.textContent)).toContain('Clothing')
    })

    it('allows changing category', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByRole('combobox', { name: 'Category' })
      await user.selectOptions(select, 'Electronics')
      expect(select).toHaveValue('Electronics')
    })

    it('passes selected category to onSearch', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<App onSearch={onSearch} />)
      const select = screen.getByRole('combobox', { name: 'Category' })
      await user.selectOptions(select, 'Electronics')
      await user.click(screen.getByRole('button', { name: 'Search' }))
      expect(onSearch).toHaveBeenCalledWith('', 'Electronics')
    })
  })

  describe('Footer', () => {
    it('renders copyright text', () => {
      render(<App />)
      expect(screen.getByText(/Seekbar\. All rights reserved/)).toBeInTheDocument()
    })

    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: 'Component Dock' })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
