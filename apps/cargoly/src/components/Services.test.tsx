import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES_INTRO, SERVICES_LABEL } from '../data'

const serviceTitles = ['Planning', 'List Delivery', 'Transport', 'Inventory']

describe('Services', () => {
  it('renders the section header with label, heading, and intro', () => {
    render(<Services />)

    expect(screen.getByText(SERVICES_LABEL)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cargoly Best' })).toBeInTheDocument()
    expect(screen.getByText(SERVICES_INTRO)).toBeInTheDocument()
  })

  it('renders four service cards, each with an icon, title, and description', () => {
    render(<Services />)

    for (const title of serviceTitles) {
      const heading = screen.getByRole('heading', { name: title })
      const card = heading.parentElement!
      expect(card.querySelector('svg')).not.toBeNull()
      expect(card).toHaveTextContent(new RegExp(title))
    }
  })
})
