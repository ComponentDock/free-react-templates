import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WhatsNew } from './WhatsNew'
import { whatsNewTitle, whatsNewTabs, whatsNewFeatured, whatsNewSide } from '../data'

describe('WhatsNew', () => {
  it('renders the section heading and all tabs', () => {
    render(<WhatsNew />)
    expect(screen.getByRole('heading', { name: whatsNewTitle })).toBeInTheDocument()
    for (const tab of whatsNewTabs) {
      expect(screen.getByRole('button', { name: tab.label })).toBeInTheDocument()
    }
  })

  it('renders the featured article and side articles', () => {
    render(<WhatsNew />)
    expect(screen.getByText(whatsNewFeatured.title)).toBeInTheDocument()
    for (const article of whatsNewSide) {
      expect(screen.getByText(article.title)).toBeInTheDocument()
    }
  })

  it('allows switching between tabs', async () => {
    const user = userEvent.setup()
    render(<WhatsNew />)

    const travelTab = screen.getByRole('button', { name: 'Travel' })
    await user.click(travelTab)
    expect(travelTab).toHaveClass('text-accent')
  })
})
