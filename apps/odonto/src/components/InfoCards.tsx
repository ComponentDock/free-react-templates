import { Calendar, Users, DollarSign } from 'lucide-react'

const cards = [
  {
    icon: Calendar,
    title: 'Easy Booking',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Users,
    title: 'Team Dentist',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function InfoCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
