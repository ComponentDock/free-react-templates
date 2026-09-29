import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  describe('Page layout', () => {
    it('renders the search input', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
    })

    it('has a full-viewport layout with background image', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('min-h-screen')
      expect(wrapper.className).toContain('bg-cover')
      expect(wrapper.className).toContain('bg-center')
    })

    it('has a centered layout', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('items-center')
      expect(wrapper.className).toContain('justify-center')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('SearchGlow — Minimal Search Form')
    })

    it('uses Montserrat font', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.className).toContain('font-sans')
    })
  })

  describe('Form', () => {
    it('has a form element with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
    })

    it('prevents form submission', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: 'Search form' })
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      const prevented = !form.dispatchEvent(submitEvent)
      expect(prevented).toBe(true)
    })
  })

  describe('Footer', () => {
    it('renders footer with Component Dock link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: 'Component Dock' })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('footer link opens in new tab', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: 'Component Dock' })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders Made with text', () => {
      render(<App />)
      expect(screen.getByText('Made with')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has search input with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
    })

    it('has search button with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    })
  })
})
