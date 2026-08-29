import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the calendar widget and footer', () => {
    render(<App />)
    expect(screen.getByText('Calendar #01')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('has the correct page background', () => {
    const { container } = render(<App />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveStyle({ backgroundColor: 'var(--color-page)' })
  })
})
