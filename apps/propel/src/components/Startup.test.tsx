import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Startup } from './Startup'
import { STARTUP } from '../data'

describe('Startup', () => {
  it('renders the heading, lead and both media rows', () => {
    render(<Startup />)
    expect(screen.getByRole('heading', { level: 2, name: /Startup/ })).toBeInTheDocument()
    expect(screen.getByText(STARTUP.lead)).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Best Company' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: STARTUP.rowOne.imageAlt })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: STARTUP.rowTwo.imageAlt })).toBeInTheDocument()

    for (const bullet of STARTUP.rowOne.bullets) {
      expect(screen.getByText(bullet)).toBeInTheDocument()
    }
  })

  it('renders two Learn more arrow buttons linking to services', () => {
    render(<Startup />)
    const buttons = screen.getAllByRole('link', { name: /Learn more/ })
    expect(buttons).toHaveLength(2)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#services')
    }
  })
})
