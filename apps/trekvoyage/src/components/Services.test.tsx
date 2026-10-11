import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the title, the photo column and the four light-grey cards', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    const image = container.querySelector('img')!
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/trekvoyage-services/600/620')

    for (const title of [
      'Easy & Free Transport',
      'Delicious Food',
      'Swimming Pool',
      'Playground',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const cards = container.querySelectorAll('div.bg-panel')
    expect(cards).toHaveLength(4)
    expect(cards[0]!.className).toContain('p-[30px]')
    expect(cards[0]!.querySelector('p')?.textContent).toContain('Even the all-powerful Pointing')
  })
})
