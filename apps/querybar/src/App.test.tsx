import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('QueryBar — Flight Search', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('QueryBar — Flight Search')
  })

  it('renders From and To inputs with placeholder', () => {
    render(<App />)
    const inputs = screen.getAllByPlaceholderText('City, Region or Airport')
    expect(inputs).toHaveLength(2)
  })

  it('renders the Depart date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Depart')).toBeInTheDocument()
  })

  it('renders the Return date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Return')).toBeInTheDocument()
  })

  it('renders the Passengers field with default summary', () => {
    render(<App />)
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 0 Children, 1 Room')
  })

  it('renders the Search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the From field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const inputs = screen.getAllByPlaceholderText('City, Region or Airport')
    await user.type(inputs[0]!, 'New York')
    expect(inputs[0]).toHaveValue('New York')
  })

  it('allows typing in the To field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const inputs = screen.getAllByPlaceholderText('City, Region or Airport')
    await user.type(inputs[1]!, 'London')
    expect(inputs[1]).toHaveValue('London')
  })

  it('allows setting depart date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const depart = screen.getByLabelText('Depart')
    await user.type(depart, '2026-12-25')
    expect(depart).toHaveValue('2026-12-25')
  })

  it('allows setting return date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const ret = screen.getByLabelText('Return')
    await user.type(ret, '2026-12-30')
    expect(ret).toHaveValue('2026-12-30')
  })

  it('opens passengers dropdown on field click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    expect(screen.getByText('Room 1')).toBeInTheDocument()
  })

  it('opens passengers dropdown on plus button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /toggle passengers dropdown/i }))
    expect(screen.getByText('Room 1')).toBeInTheDocument()
  })

  it('increments adults count', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /increase adults/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 1 Room')
  })

  it('decrements adults count', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /increase adults/i }))
    await user.click(screen.getByRole('button', { name: /decrease adults/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 0 Children, 1 Room')
  })

  it('adults cannot go below 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /decrease adults/i }))
    await user.click(screen.getByRole('button', { name: /decrease adults/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 0 Children, 1 Room')
  })

  it('increments children count', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /increase children/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 1 Children, 1 Room')
  })

  it('decrements children count', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /increase children/i }))
    await user.click(screen.getByRole('button', { name: /decrease children/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 0 Children, 1 Room')
  })

  it('children cannot go below 0', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByRole('button', { name: /decrease children/i }))
    expect(screen.getByLabelText('Passengers')).toHaveValue('1 Adult, 0 Children, 1 Room')
  })

  it('adds a new room', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    expect(screen.getByText('Room 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 2 Rooms')
  })

  it('increments adults in room 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const btns = screen.getAllByRole('button', { name: /increase adults/i })
    await user.click(btns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('3 Adults, 0 Children, 2 Rooms')
  })

  it('decrements adults in room 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const incBtns = screen.getAllByRole('button', { name: /increase adults/i })
    await user.click(incBtns[1]!)
    const decBtns = screen.getAllByRole('button', { name: /decrease adults/i })
    await user.click(decBtns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 2 Rooms')
  })

  it('adults in room 2 cannot go below 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const btns = screen.getAllByRole('button', { name: /decrease adults/i })
    await user.click(btns[1]!)
    await user.click(btns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 2 Rooms')
  })

  it('increments children in room 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const btns = screen.getAllByRole('button', { name: /increase children/i })
    await user.click(btns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 1 Children, 2 Rooms')
  })

  it('decrements children in room 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const incBtns = screen.getAllByRole('button', { name: /increase children/i })
    await user.click(incBtns[1]!)
    const decBtns = screen.getAllByRole('button', { name: /decrease children/i })
    await user.click(decBtns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 2 Rooms')
  })

  it('children in room 2 cannot go below 0', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    await user.click(screen.getByText('Add room'))
    const btns = screen.getAllByRole('button', { name: /decrease children/i })
    await user.click(btns[1]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 2 Rooms')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByLabelText('Passengers')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the copyright line in the footer', () => {
    render(<App />)
    expect(screen.getByText(/QueryBar\. All rights reserved/)).toBeInTheDocument()
  })

  it('handles multiple increments and decrements', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Passengers'))
    const incBtns = screen.getAllByRole('button', { name: /increase adults/i })
    await user.click(incBtns[0]!)
    await user.click(incBtns[0]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('3 Adults, 0 Children, 1 Room')
    const decBtns = screen.getAllByRole('button', { name: /decrease adults/i })
    await user.click(decBtns[0]!)
    expect(screen.getByLabelText('Passengers')).toHaveValue('2 Adults, 0 Children, 1 Room')
  })
})
