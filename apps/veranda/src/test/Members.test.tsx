import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Members } from '../components/Members'
import { MEMBERS } from '../data'

describe('Members', () => {
  it('renders three figures with counts and only the two badges', () => {
    render(<Members />)

    for (const member of MEMBERS) {
      const figure = screen.getByText(member.name).closest('figure') as HTMLElement
      expect(within(figure).getByText(member.role)).toBeInTheDocument()
      expect(within(figure).getByText(member.answers)).toBeInTheDocument()
      expect(within(figure).getByRole('blockquote')).toHaveTextContent(member.quote)
    }

    expect(screen.getByText('Top contributor')).toBeInTheDocument()
    expect(screen.getByText('Channel moderator')).toBeInTheDocument()
    const last = screen.getByText('Amara Osei').closest('figure') as HTMLElement
    expect(within(last).queryByText('Top contributor')).not.toBeInTheDocument()
  })
})
