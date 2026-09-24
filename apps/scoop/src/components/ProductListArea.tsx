import { Calendar, MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'Best Product Deals',
    items: [
      {
        image: 'https://picsum.photos/seed/scoop-pd1/100/80',
        headline: 'Video Games Playing With Imagination That Surprise You',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd2/100/80',
        headline: 'A Discount Toner Cartridge Is Better Than Ever And You Will Save',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd3/100/80',
        headline: 'Microsoft Patch Management For Home Users',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd4/100/80',
        headline: 'Asus Laptops Are Still Part Of The Dell Family',
      },
    ],
  },
  {
    title: 'Tech Culture',
    items: [
      {
        image: 'https://picsum.photos/seed/scoop-pd5/100/80',
        headline: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd6/100/80',
        headline: 'For Women Only Your Computer Usage Could Cost You Your Job',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd7/100/80',
        headline: 'Converter Ipod Video Taking Portable Video Viewing To A Whole Level',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd8/100/80',
        headline: 'Sony Laptops Are Still Part Of The Sony Family',
      },
    ],
  },
  {
    title: 'Brilliant Ideas',
    items: [
      {
        image: 'https://picsum.photos/seed/scoop-pd9/100/80',
        headline: 'Las Vegas How To Have Non Gambling Related Fun',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd10/100/80',
        headline: 'Website Hosting Reviews Free The Best Resource For Website',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd11/100/80',
        headline: 'Compatible Inkjet Cartridge Which One Will You Choose',
      },
      {
        image: 'https://picsum.photos/seed/scoop-pd12/100/80',
        headline: 'How To Protect Your Computer Very Useful Tips',
      },
    ],
  },
]

export function ProductListArea() {
  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
                {col.title}
              </h2>
              <div className="space-y-5">
                {col.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-20 h-16 object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="text-sm font-heading font-medium text-heading leading-snug mb-1">
                        <a href="#" className="hover:text-brand transition-colors">
                          {item.headline}
                        </a>
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-body">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> March 14, 2018
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" /> 05
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
