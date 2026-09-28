import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration card and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Regpeak — Registration Form Template')

    const main = screen.getByRole('main')
    expect(within(main).getByText('Register Form')).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
