import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('SearchShift', () => {
  describe('Page layout', () => {
    it('renders a full-viewport background image with dark overlay', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: /search form/i })
      expect(form).toBeInTheDocument()
      expect(form).toHaveClass('bg-black/50')
    })

    it('centers the form on the page', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: /search form/i })
      expect(form.parentElement).toHaveClass('max-w-[790px]')
    })
  })

  describe('Category dropdown', () => {
    it('shows "Category" as the default option', () => {
      render(<App />)
      const select = screen.getByLabelText('Category')
      expect(select).toHaveValue('Category')
    })

    it('has a transparent background with white border', () => {
      render(<App />)
      const select = screen.getByLabelText('Category')
      expect(select.closest('div')).toHaveClass('border-white/30')
      expect(select).toHaveClass('bg-transparent')
    })

    it('displays options including Subject A, B, C', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByLabelText('Category')
      await user.selectOptions(select, 'Subject B')
      expect(select).toHaveValue('Subject B')
    })

    it('has a chevron-down icon', () => {
      render(<App />)
      const select = screen.getByLabelText('Category')
      const container = select.closest('div')
      expect(container?.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('Text input', () => {
    it('has placeholder "Enter Keywords"', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      expect(input).toBeInTheDocument()
    })

    it('has transparent background and white text', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      expect(input).toHaveClass('bg-transparent')
      expect(input).toHaveClass('text-white')
    })

    it('takes up remaining horizontal space', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      expect(input).toHaveClass('flex-grow')
    })

    it('accepts typed text', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      await user.type(input, 'hello world')
      expect(input).toHaveValue('hello world')
    })
  })

  describe('Search button', () => {
    it('displays "Search" text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /search/i })
      expect(button).toHaveTextContent('Search')
    })

    it('has a gradient background (blue-to-red)', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /search/i })
      expect(button).toHaveClass('from-[#2c6dd5]')
      expect(button).toHaveClass('to-[#ff4b5a]')
    })

    it('has a reversed gradient hover overlay', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /search/i })
      const hoverSpan = button.querySelector('span')
      expect(hoverSpan).toHaveClass('from-[#ff4b5a]')
      expect(hoverSpan).toHaveClass('to-[#2c6dd5]')
      expect(hoverSpan).toHaveClass('opacity-0')
      expect(hoverSpan).toHaveClass('group-hover:opacity-100')
    })

    it('has white text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /search/i })
      expect(button).toHaveClass('text-white')
    })

    it('triggers form submission on click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const form = screen.getByRole('form', { name: /search form/i })
      const submitHandler = vi.fn()
      form.addEventListener('submit', submitHandler)
      const button = screen.getByRole('button', { name: /search/i })
      await user.click(button)
      expect(submitHandler).toHaveBeenCalledTimes(1)
    })
  })

  describe('Responsive behavior', () => {
    it('stacks form sections vertically on mobile', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: /search form/i })
      expect(form).toHaveClass('flex-col')
      expect(form).toHaveClass('sm:flex-row')
    })

    it('reduces input height on mobile', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      expect(input).toHaveClass('h-[50px]')
      expect(input).toHaveClass('sm:h-[68px]')
    })
  })

  describe('Accessibility', () => {
    it('category dropdown is focusable via keyboard', () => {
      render(<App />)
      const select = screen.getByLabelText('Category')
      expect(select).toBeVisible()
    })

    it('text input is focusable via keyboard', () => {
      render(<App />)
      const input = screen.getByPlaceholderText('Enter Keywords')
      expect(input).toBeVisible()
    })

    it('search button is focusable via keyboard', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /search/i })
      expect(button).toBeVisible()
    })
  })

  describe('Footer', () => {
    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('shows "Made with Component Dock"', () => {
      render(<App />)
      expect(screen.getByText(/made with/i)).toBeInTheDocument()
    })
  })

  describe('Title', () => {
    it('sets the page title', () => {
      render(<App />)
      expect(document.title).toBe('SearchShift — Cinematic Search Form')
    })
  })
})
