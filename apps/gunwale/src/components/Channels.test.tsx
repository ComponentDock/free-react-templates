import { render, screen, within } from '@testing-library/react'
import { Channels } from './Channels'
import { CHANNELS, SOCIAL_LABEL } from '../lib/site'

describe('Channels — the four circles on the brand strip', () => {
  it('renders exactly four named circles, each pointing at its own block', () => {
    render(<Channels />)

    const row = screen.getByRole('list', { name: SOCIAL_LABEL })

    expect(within(row).getAllByRole('listitem')).toHaveLength(4)

    for (const channel of CHANNELS) {
      const circle = within(row).getByRole('link', { name: channel.label })

      expect(circle).toHaveAttribute('href', channel.href)
      expect(circle.className).toContain('size-10')
      expect(circle.className).toContain('rounded-full')
      expect(circle.querySelector('svg')).not.toBeNull()
    }

    expect(row.className).toContain('items-start')
  })
})
