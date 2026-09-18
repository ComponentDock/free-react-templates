import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AboutTabs } from './AboutTabs'

describe('AboutTabs', () => {
  it('renders the heading', () => {
    render(<AboutTabs />)
    expect(screen.getByText('We Are Leader In The Construction World')).toBeInTheDocument()
  })

  it('shows Technology tab content by default', () => {
    render(<AboutTabs />)
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Technology')
    expect(screen.getByText(/latest construction technology/)).toBeInTheDocument()
  })

  it('switches to Quality tab on click', async () => {
    const user = userEvent.setup()
    render(<AboutTabs />)

    await user.click(screen.getByRole('tab', { name: 'Quality' }))

    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Quality')
    expect(screen.getByText(/heart of everything we do/)).toBeInTheDocument()
  })

  it('switches to Staff tab on click', async () => {
    const user = userEvent.setup()
    render(<AboutTabs />)

    await user.click(screen.getByRole('tab', { name: 'Staff' }))

    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Staff')
    expect(screen.getByText(/experienced team/)).toBeInTheDocument()
  })
})
