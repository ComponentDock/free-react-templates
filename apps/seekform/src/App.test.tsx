import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { CategoryPills } from './components/SearchHero'

describe('Seekform', () => {
  describe('SearchHero', () => {
    it('renders the heading', () => {
      render(<App />)
      expect(
        screen.getByRole('heading', { level: 1, name: /what are you looking for/i }),
      ).toBeInTheDocument()
    })

    it('renders a search input', () => {
      render(<App />)
      expect(screen.getByRole('searchbox')).toBeInTheDocument()
    })

    it('allows typing in the search input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByRole('searchbox')
      await user.click(input)
      await user.type(input, 'shoes')
      expect(input).toHaveValue('shoes')
    })

    it('submits the search form on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByRole('searchbox')
      await user.type(input, 'test query{enter}')
      expect(input).toHaveValue('test query')
    })
  })

  describe('CategoryPills', () => {
    it('renders all 5 category pills', () => {
      render(<App />)
      const categories = ['New Arrivals', 'Ladies', 'Mens', 'Accessories', 'Sale']
      for (const cat of categories) {
        expect(screen.getByText(cat)).toBeInTheDocument()
      }
    })

    it('renders pills as buttons', () => {
      render(<App />)
      const pills = screen.getAllByRole('button', {
        name: /new arrivals|ladies|mens|accessories|sale/i,
      })
      expect(pills).toHaveLength(5)
    })

    it('calls onSelect when a pill is clicked', async () => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(<CategoryPills onSelect={onSelect} />)
      await user.click(screen.getByText('Ladies'))
      expect(onSelect).toHaveBeenCalledWith('Ladies')
    })
  })

  describe('Footer', () => {
    it('renders Component Dock link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('renders "Made with Component Dock" text', () => {
      render(<App />)
      expect(screen.getByText(/made with/i)).toBeInTheDocument()
      expect(screen.getByText(/component dock/i)).toBeInTheDocument()
    })
  })
})
