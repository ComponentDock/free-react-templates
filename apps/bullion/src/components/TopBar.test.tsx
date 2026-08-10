import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { topBarLinks, socials } from '../data'

describe('TopBar', () => {
  it('renders the utility links on the left and social icons on the right', () => {
    render(<TopBar />)

    for (const link of topBarLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    const bar = screen.getByText(topBarLinks[0]).closest('div')!.parentElement!
    expect(bar).toHaveClass('bg-dark')
  })
})
