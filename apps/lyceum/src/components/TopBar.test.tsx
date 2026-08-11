import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'
import { topBarEmail, topBarPhone, topBarSocials } from '../data'

describe('TopBar', () => {
  it('renders the four social icons on the left', () => {
    render(<TopBar />)

    for (const name of topBarSocials) {
      expect(screen.getByRole('link', { name: `Visit our ${name} page` })).toBeInTheDocument()
    }
  })

  it('renders the phone and email links on the right', () => {
    render(<TopBar />)

    const phone = screen.getByRole('link', { name: 'Call us' })
    expect(phone).toHaveTextContent(topBarPhone)
    expect(phone).toHaveAttribute('href', 'tel:+4400123654896')

    const email = screen.getByRole('link', { name: 'Email us' })
    expect(email).toHaveTextContent(topBarEmail)
    expect(email).toHaveAttribute('href', `mailto:${topBarEmail}`)
  })
})
