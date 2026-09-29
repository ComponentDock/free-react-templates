import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { BookingForm } from './components/BookingForm'

describe('PropSearch', () => {
  describe('Page layout', () => {
    it('renders the page with a heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('PropSearch')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('PropSearch — Property Search Form')
    })

    it('has a light background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('bg-propsearch-bg')
    })

    it('renders the booking form', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Property search form' })).toBeInTheDocument()
    })
  })

  describe('Location field', () => {
    it('renders a text input for location', () => {
      render(<App />)
      expect(screen.getByLabelText('Location')).toBeInTheDocument()
    })

    it('has the correct placeholder', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('City/Locality Name')).toBeInTheDocument()
    })

    it('allows typing in the location field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText('Location')
      await user.type(input, 'New York')
      expect(input).toHaveValue('New York')
    })
  })

  describe('Property Type dropdown', () => {
    it('renders a select for property type', () => {
      render(<App />)
      expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
    })

    it('has the correct options', () => {
      render(<App />)
      const select = screen.getByLabelText('Property Type')
      expect(select).toHaveValue('')
      const options = screen.getAllByRole('option')
      const propertyTypeOptions = options.filter(
        (opt) => opt.closest('select')?.id === 'property-type',
      )
      expect(propertyTypeOptions.map((o) => o.textContent)).toEqual([
        'Type',
        'Commercial',
        '- Office',
        'Residential',
        'Villa',
        'Condominium',
        'Apartment',
      ])
    })

    it('allows selecting a property type', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByLabelText('Property Type')
      await user.selectOptions(select, 'apartment')
      expect(select).toHaveValue('apartment')
    })
  })

  describe('Property Status dropdown', () => {
    it('renders a select for property status', () => {
      render(<App />)
      expect(screen.getByLabelText('Property Status')).toBeInTheDocument()
    })

    it('has Rent and Sale options', () => {
      render(<App />)
      expect(screen.getByRole('option', { name: 'Rent' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Sale' })).toBeInTheDocument()
    })

    it('allows selecting a status', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByLabelText('Property Status')
      await user.selectOptions(select, 'sale')
      expect(select).toHaveValue('sale')
    })
  })

  describe('Price Limit dropdown', () => {
    it('renders a select for price limit', () => {
      render(<App />)
      expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
    })

    it('has price options from $5,000 to $2,000,000', () => {
      render(<App />)
      expect(screen.getByRole('option', { name: '$5,000' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '$100,000' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '$1,000,000' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '$2,000,000' })).toBeInTheDocument()
    })

    it('allows selecting a price limit', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByLabelText('Price Limit')
      await user.selectOptions(select, '500000')
      expect(select).toHaveValue('500000')
    })
  })

  describe('Search button', () => {
    it('renders a search button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /Search Availability/i })).toBeInTheDocument()
    })

    it('displays the subtitle text', () => {
      render(<App />)
      expect(screen.getByText('Best Price Guaranteed!')).toBeInTheDocument()
    })

    it('has the brand color background', () => {
      render(<App />)
      const btn = screen.getByRole('button', { name: /Search Availability/i })
      expect(btn.className).toContain('bg-propsearch-brand')
    })
  })

  describe('Form submission', () => {
    it('calls onSearch with form data on submit', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<BookingForm onSearch={onSearch} />)
      await user.type(screen.getByLabelText('Location'), 'Miami')
      await user.selectOptions(screen.getByLabelText('Property Type'), 'villa')
      await user.selectOptions(screen.getByLabelText('Property Status'), 'sale')
      await user.selectOptions(screen.getByLabelText('Price Limit'), '1000000')
      await user.click(screen.getByRole('button', { name: /Search Availability/i }))
      expect(onSearch).toHaveBeenCalledWith({
        location: 'Miami',
        propertyType: 'villa',
        propertyStatus: 'sale',
        priceLimit: '1000000',
      })
    })

    it('calls onSearch with empty fields when submitted without changes', async () => {
      const onSearch = vi.fn()
      const user = userEvent.setup()
      render(<BookingForm onSearch={onSearch} />)
      await user.click(screen.getByRole('button', { name: /Search Availability/i }))
      expect(onSearch).toHaveBeenCalledWith({
        location: '',
        propertyType: '',
        propertyStatus: '',
        priceLimit: '',
      })
    })

    it('logs search data when submitted from App', async () => {
      const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText('Location'), 'Boston')
      await user.click(screen.getByRole('button', { name: /Search Availability/i }))
      expect(spy).toHaveBeenCalledWith('Search:', {
        location: 'Boston',
        propertyType: '',
        propertyStatus: '',
        priceLimit: '',
      })
      spy.mockRestore()
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

    it('displays copyright with current year', () => {
      render(<App />)
      const year = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has labels associated with all form fields', () => {
      render(<App />)
      expect(screen.getByLabelText('Location')).toBeInTheDocument()
      expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
      expect(screen.getByLabelText('Property Status')).toBeInTheDocument()
      expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
    })

    it('form has an accessible name', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Property search form' })).toBeInTheDocument()
    })
  })
})
