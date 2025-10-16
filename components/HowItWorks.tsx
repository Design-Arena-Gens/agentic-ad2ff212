export default function HowItWorks() {
  const steps = [
    {
      icon: '✨',
      title: "Click 'START NOW'",
      description: 'Begin your journey to earning a $100 Crumbl gift card',
    },
    {
      icon: '✉️',
      title: 'Enter your email and cookie preferences',
      description: 'Tell us about your favorite Crumbl flavors',
    },
    {
      icon: '📋',
      title: 'Complete the Crumbl flavor survey',
      description: 'Share your honest feedback about cookie experiences',
    },
    {
      icon: '✅',
      title: 'Finish 5+ simple offers',
      description: 'Complete quick tasks like app downloads or surveys',
    },
    {
      icon: '🎁',
      title: 'Receive your $100 Crumbl gift card',
      description: 'Get your reward delivered via email within 24-48 hours',
    },
  ]

  const handleCTAClick = () => {
    window.location.href = '#faq'
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Five simple steps to earn your Crumbl gift card
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-gradient-to-b from-crumbl-light-pink to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-4 mt-2">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-black mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="bg-black text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            START NOW
          </button>
        </div>
      </div>
    </section>
  )
}
