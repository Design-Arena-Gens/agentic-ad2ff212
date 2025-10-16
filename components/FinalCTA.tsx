export default function FinalCTA() {
  const handleCTAClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-crumbl-light-pink to-crumbl-pink">
      <div className="max-w-4xl mx-auto text-center">
        {/* Final Message */}
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-black mb-6">
          Ready to Get Your $100 Gift Card?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join hundreds of cookie lovers who have already claimed their reward!
        </p>

        {/* Final CTA Button */}
        <button
          onClick={handleCTAClick}
          className="bg-black text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          START NOW
        </button>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-pink-300">
          <p className="text-sm text-gray-600">
            © 2025 Crumbl Landing Page. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This page is not affiliated with Crumbl Cookies. This is a lead generation campaign.
          </p>
        </div>
      </div>
    </section>
  )
}
