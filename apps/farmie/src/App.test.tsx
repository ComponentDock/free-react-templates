import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Farmie — Farm & Organic Shop Website Template')

    const main = screen.getByRole('main')
    const h2s = within(main).getAllByRole('heading', { level: 2 })
    expect(h2s[0]?.textContent).toContain('The hearth of the farm')
    expect(within(main).getByText('Best Services')).toBeInTheDocument()
    expect(within(main).getByText('Let Us Tell You Our Story')).toBeInTheDocument()
    expect(within(main).getByText('From Farm To Your Table')).toBeInTheDocument()
    expect(within(main).getAllByText('Our Produce Is Mainstay For Us')).toHaveLength(2)
    expect(within(main).getByText('Our Product Are Highest Quality')).toBeInTheDocument()
    expect(within(main).getByText('Farming Practices To Preserve Land & Water')).toBeInTheDocument()
    expect(within(main).getByText('What Our Customers Say')).toBeInTheDocument()
    expect(within(main).getByText('Get In Touch With Us')).toBeInTheDocument()
    expect(within(main).getByText('From Our Farm News')).toBeInTheDocument()
    expect(within(main).getByText('Our Certifications & Guarantees')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
