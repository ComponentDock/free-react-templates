import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { SearchBar } from './components/SearchBar'
import { FilterSelect } from './components/FilterSelect'
import { AdvancedSearch } from './components/AdvancedSearch'

describe('Seekstream', () => {
  describe('Page layout', () => {
    it('renders the page with a search form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('has a gray background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-seekstream-bg')
    })

    it('has a white card centered on the page', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      const card = wrapper.querySelector('main') as HTMLElement
      expect(card.className).toContain('bg-seekstream-card')
      expect(card.className).toContain('rounded-lg')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Seekstream — Advanced Search Form')
    })
  })

  describe('SearchBar', () => {
    it('renders search input with placeholder', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Type Keywords')).toBeInTheDocument()
    })

    it('renders a search icon', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Type Keywords')
      const container = input.closest('.flex') as HTMLElement
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('is a controlled input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Type Keywords') as HTMLInputElement
      await user.type(input, 'test query')
      expect(input.value).toBe('test query')
    })

    it('calls onChange with typed value', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<SearchBar onChange={handleChange} />)
      const input = screen.getByPlaceholderText('Type Keywords')
      await user.type(input, 'a')
      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('renders with default empty value', () => {
      render(<SearchBar />)
      const input = screen.getByPlaceholderText('Type Keywords') as HTMLInputElement
      expect(input.value).toBe('')
    })

    it('applies custom className', () => {
      const { container } = render(<SearchBar className="custom-class" />)
      expect(container.firstElementChild?.className).toContain('custom-class')
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

    it('renders the Reset button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
    })

    it('search button is clickable', async () => {
      const user = userEvent.setup()
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Search' })
      await user.click(btn)
    })

    it('reset button is clickable', async () => {
      const user = userEvent.setup()
      render(<App />)
      const btn = screen.getByRole('button', { name: 'Reset' })
      await user.click(btn)
    })

    it('displays result count', () => {
      render(<App />)
      expect(screen.getByText('108 results')).toBeInTheDocument()
    })

    it('calls onSearch when Search button clicked', async () => {
      const handleSearch = vi.fn()
      const user = userEvent.setup()
      render(<AdvancedSearch onSearch={handleSearch} />)
      await user.click(screen.getByRole('button', { name: 'Search' }))
      expect(handleSearch).toHaveBeenCalledTimes(1)
    })

    it('calls onReset when Reset button clicked', async () => {
      const handleReset = vi.fn()
      const user = userEvent.setup()
      render(<AdvancedSearch onReset={handleReset} />)
      await user.click(screen.getByRole('button', { name: 'Reset' }))
      expect(handleReset).toHaveBeenCalledTimes(1)
    })

    it('applies custom className', () => {
      const { container } = render(<AdvancedSearch className="custom-cls" />)
      expect(container.firstElementChild?.className).toContain('custom-cls')
    })

    it('renders custom result count', () => {
      render(<AdvancedSearch resultCount={42} />)
      expect(screen.getByText('42 results')).toBeInTheDocument()
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
      expect(firstSelect.options[0]).toHaveTextContent('All')
    })

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

    it('renders with custom className', () => {
      const { container } = render(
        <FilterSelect label="TEST" options={['A']} className="my-class" />,
      )
      expect(container.firstElementChild?.className).toContain('my-class')
    })

    it('renders with default empty value', () => {
      render(<FilterSelect label="TEST" options={['A', 'B']} />)
      const select = screen.getByRole('combobox') as HTMLSelectElement
      expect(select.value).toBe('')
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
      const input = screen.getByPlaceholderText('Type Keywords')
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
})
