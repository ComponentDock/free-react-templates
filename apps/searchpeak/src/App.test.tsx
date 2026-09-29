import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { FilterSelect } from './components/FilterSelect'

describe('Searchpeak', () => {
  describe('Page layout', () => {
    it('renders the page with a search form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('has a blue background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-searchpeak-bg')
    })

    it('has a white card centered on the page', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      const card = wrapper.querySelector('main') as HTMLElement
      expect(card.className).toContain('bg-searchpeak-card')
      expect(card.className).toContain('rounded-lg')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Searchpeak — Advanced Search Form')
    })
  })

  describe('SearchBar', () => {
    it('renders search input with placeholder', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    })

    it('displays result count', () => {
      render(<App />)
      expect(screen.getByText('108 results')).toBeInTheDocument()
    })

    it('renders a search icon', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      const container = input.closest('.flex') as HTMLElement
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('is a controlled input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement
      await user.type(input, 'test query')
      expect(input.value).toBe('test query')
    })
  })

  describe('AdvancedSearch', () => {
    it('renders the Advanced Search heading', () => {
      render(<App />)
      expect(screen.getByText('Advanced Search')).toBeInTheDocument()
    })

    it('renders all six filter labels', () => {
      render(<App />)
      expect(screen.getByText('ACCESSORIES')).toBeInTheDocument()
      expect(screen.getByText('COLOR')).toBeInTheDocument()
      expect(screen.getByText('SIZE')).toBeInTheDocument()
      expect(screen.getByText('SALE')).toBeInTheDocument()
      expect(screen.getByText('TIME')).toBeInTheDocument()
      expect(screen.getByText('TYPE')).toBeInTheDocument()
    })

    it('renders six select elements', () => {
      render(<App />)
      const selects = screen.getAllByRole('combobox')
      expect(selects).toHaveLength(6)
    })

    it('renders the Search button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    })

    it('renders the Delete button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    })

    it('search button is clickable', async () => {
      const user = userEvent.setup()
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      await user.click(btn)
      // No error means success
    })

    it('delete button is clickable', async () => {
      const user = userEvent.setup()
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Delete' })
      await user.click(btn)
      // No error means success
    })
  })

  describe('FilterSelect', () => {
    it('has "All" as the default option in each select', () => {
      render(<App />)
      const selects = screen.getAllByRole('combobox')
      for (const select of selects) {
        const options = select.querySelectorAll('option')
        expect(options[0]).toHaveTextContent('All')
      }
    })

    it('has selectable options', () => {
      render(<App />)
      const selects = screen.getAllByRole('combobox')
      const firstSelect = selects[0] as HTMLSelectElement
      expect(firstSelect.options.length).toBeGreaterThan(1)
      const firstOption = firstSelect.options[0]
      expect(firstOption).toBeDefined()
      expect(firstOption).toHaveTextContent('All')
    })
  })

  describe('Form behavior', () => {
    it('has a form element with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('prevents form submission on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Search...')
      await user.type(input, 'query{Enter}')
      expect(input).toHaveValue('query')
    })

    it('prevents form submit event', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: 'Search form' })
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      const prevented = !form.dispatchEvent(submitEvent)
      expect(prevented).toBe(true)
    })
  })

  describe('Footer', () => {
    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Component Dock/ })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('displays "More templates at" text', () => {
      render(<App />)
      expect(screen.getByText(/More templates at/)).toBeInTheDocument()
    })
  })

  describe('FilterSelect (standalone)', () => {
    it('calls onChange when an option is selected', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(
        <FilterSelect label="COLOR" options={['Black', 'White', 'Red']} onChange={handleChange} />,
      )
      const select = screen.getByRole('combobox')
      await user.selectOptions(select, 'Black')
      expect(handleChange).toHaveBeenCalledWith('Black')
    })
  })
})
