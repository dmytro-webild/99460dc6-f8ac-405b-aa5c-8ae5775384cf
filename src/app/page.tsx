"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Car, Facebook, Instagram, Leaf, Sparkles, Star, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Packages",          id: "#packages"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Schedule",          id: "#schedule"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-car-detailing-logo-design_23-2149903187.jpg"
      logoAlt="Junior Mobile Detailing Logo"
      brandName="Junior Mobile Detailing"
      bottomLeftText="Your Car's Best Friend"
      bottomRightText="hello@juniordetailing.com"
      button={{
        text: "Book Now",        href: "#schedule"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Junior Mobile Detailing"
      description="Premium car care delivered right to your doorstep. Experience convenience and a showroom shine without leaving your home or office."
      kpis={[
        {
          value: "",          label: ""},
        {
          value: "5",          label: "Star Reviews"},
        {
          value: "10+",          label: "Years Experience"},
      ]}
      enableKpiAnimation={true}
      tag=""
      buttons={[
        {
          text: "Explore Packages",          href: "#packages"},
        {
          text: "Schedule Now",          href: "#schedule"},
      ]}
      imageSrc="https://img.b2bpic.net/premium-photo/manual-cleaning-with-soap-self-care-car-wash-cleaning-headlights-with-foam-soft-brush-carwash-detailing_255847-12711.jpg?id=250084748"
      imageAlt="Mobile detailing van cleaning a car with a glossy finish"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/expert-informs-woman-car-motor-costs_482257-96392.jpg",          alt: "Expert informs woman of car motor costs"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-elegant-woman-car-salon_1157-32018.jpg",          alt: "Stylish and elegant woman in a car salon"},
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-using-smartphone-street_23-2148213565.jpg",          alt: "Business woman using smartphone in the street"},
        {
          src: "http://img.b2bpic.net/free-photo/passenger-using-her-mobile-phone-car_23-2148510543.jpg",          alt: "Passenger using her mobile phone in the car"},
        {
          src: "http://img.b2bpic.net/free-photo/horizontal-portrait-young-girl-with-long-hair-glasses-walking-parking-zone-she-wears-yellow-sweater-black-jacket-she-is-smiling-camera-holds-phone-hands_197531-483.jpg",          alt: "Horizontal portrait of young girl with long hair in glasses walking on parking zone. She wears yellow sweater and black jacket. She is smiling to the camera and holds phone in hands."},
      ]}
      avatarText="Join 500+ happy clients!"
      marqueeItems={[
        {
          type: "image",          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=owaggp",          alt: "local business partnership logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/car-dealership-labels-template_23-2150777960.jpg",          alt: "car dealership logo modern"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/gradient-healthcare-logo-template_52683-139013.jpg",          alt: "insurance company logo car"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/happy-businessman-african-american-mechanic-handshaking-auto-repair-shop_637285-11567.jpg",          alt: "fleet management company logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/gradient-auto-parts-logo-design_52683-86801.jpg",          alt: "valet service logo luxury"},
        {
          type: "text",          text: "Top Rated Service"},
        {
          type: "text-icon",          text: "Eco-Friendly",          icon: Leaf,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Bringing the Shine to You"
      description="Junior Mobile Detailing provides top-tier car care services with unmatched convenience. Our expert detailers use only premium products and techniques to ensure your vehicle looks its absolute best."
      subdescription="We are passionate about cars and dedicated to delivering exceptional results, saving you time and hassle."
      icon={Car}
      imageSrc="http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3865.jpg"
      imageAlt="Professional mobile car detailer working on a car interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      features={[
        {
          title: "Unmatched Convenience",          description: "We come to you, whether at home or work, fitting seamlessly into your busy schedule.",          imageSrc: "http://img.b2bpic.net/free-photo/auto-service-salon-doign-car-wrapping_23-2149593838.jpg",          imageAlt: "Mobile detailing van parked at a customer's home"},
        {
          title: "Superior Quality",          description: "Our experienced detailers use only the finest products and techniques for a flawless finish.",          imageSrc: "http://img.b2bpic.net/free-photo/car-transmission-inside-car-salon-close-up_1303-19223.jpg",          imageAlt: "Close up of a car's shining interior after detailing"},
        {
          title: "Eco-Friendly Practices",          description: "We prioritize environmentally safe products and water-saving methods.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-washing_23-2149172891.jpg",          imageAlt: "Environmentally friendly car wash with foam"},
      ]}
      title="Our Detailing Process"
      description="We blend meticulous attention to detail with professional-grade products to rejuvenate your vehicle, inside and out. Experience the ultimate convenience of premium car care at your location."
      tag="Why Choose Us"
    />
  </div>

  <div id="packages" data-section="packages">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      plans={[
        {
          id: "exterior-wash",          badge: "Shine",          badgeIcon: Sparkles,
          price: "$75",          subtitle: "Exterior Wash Package",          features: [
            "Thorough Hand Wash",            "Wheel & Tire Cleaning",            "Tire Shine Application",            "Exterior Window Cleaning"],
        },
        {
          id: "interior-detail",          badge: "Refresh",          badgeIcon: Car,
          price: "$120",          subtitle: "Interior Detail Package",          features: [
            "Deep Vacuuming",            "Surface Wipe Down",            "Interior Window Cleaning",            "Dashboard & Console Protectant"],
        },
        {
          id: "full-detail",          badge: "Elite",          badgeIcon: Star,
          price: "$180",          subtitle: "Exterior & Interior Full Detail",          features: [
            "Premium Hand Wash & Wax",            "Advanced Wheel & Tire Detailing",            "Full Interior Deep Clean",            "Leather Conditioning / Fabric Protectant"],
        },
      ]}
      title="Choose Your Perfect Package"
      description="Select from our tailored detailing packages, each designed to bring out the best in your vehicle. All packages offer additional add-on services for a truly custom experience."
      tag="Our Services"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Absolutely outstanding service!",          quote: "Junior Mobile Detailing brought my car back to life. The attention to detail was incredible, and the convenience of them coming to my office was a game-changer. Highly recommend!",          name: "Sarah J.",          role: "Marketing Executive",          imageSrc: "http://img.b2bpic.net/free-photo/man-checking-out-new-car_23-2148130140.jpg",          imageAlt: "Smiling woman in business attire"},
        {
          id: "2",          title: "My car has never looked this good!",          quote: "I'm always impressed by the professionalism and thoroughness. Every nook and cranny is spotless, and the exterior shine lasts for weeks. Worth every penny!",          name: "Michael D.",          role: "Small Business Owner",          imageSrc: "http://img.b2bpic.net/free-photo/view-woman-with-car-gas-station_23-2150516410.jpg",          imageAlt: "Smiling man in casual wear"},
        {
          id: "3",          title: "Convenience meets quality.",          quote: "As a busy parent, finding time for a car wash is tough. Junior Mobile Detailing makes it easy, and their results are far superior to any traditional car wash.",          name: "Emily R.",          role: "Stay-at-Home Parent",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-using-her-mobile-phone-car_1301-3376.jpg",          imageAlt: "Smiling woman with bright background"},
        {
          id: "4",          title: "Exceptional value and service.",          quote: "I've tried many detailing services, but Junior's stands out. The team is friendly, efficient, and they truly care about delivering perfection. My go-to for car care now.",          name: "David K.",          role: "Tech Professional",          imageSrc: "http://img.b2bpic.net/free-photo/woman-fastening-helmet-man_23-2147764135.jpg",          imageAlt: "Smiling man with glasses"},
        {
          id: "5",          title: "A truly refreshing experience!",          quote: "The interior of my car feels brand new. No more lingering odors or stains. It's a huge relief to have such a clean and fresh vehicle without any effort on my part.",          name: "Jessica L.",          role: "Real Estate Agent",          imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-her-car-outside_23-2148958782.jpg",          alt: "Smiling woman in professional setting"},
      ]}
      title="What Our Clients Say"
      description="Hear directly from our satisfied customers about the exceptional care and convenience they've experienced with Junior Mobile Detailing."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Garages",        "Car Dealerships",        "Fleet Services",        "Valet Companies",        "Rental Agencies",        "Insurance Partners",        "Auto Enthusiast Clubs"]}
      title="Trusted by Drivers Across the City"
      description="Our commitment to excellence has earned us the trust of numerous individual car owners and local businesses."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "What areas do you serve?",          content: "Junior Mobile Detailing proudly serves the greater metropolitan area. Please contact us with your location for specific service area confirmation."},
        {
          id: "faq-2",          title: "How long does a detailing service take?",          content: "Service duration varies by package. An exterior wash typically takes 1-2 hours, an interior detail 2-3 hours, and a full detail 3-5 hours. Exact times will be provided upon booking."},
        {
          id: "faq-3",          title: "Do I need to provide water or electricity?",          content: "No, our vans are fully equipped with all necessary water and power. We just need access to your vehicle."},
        {
          id: "faq-4",          title: "What payment methods do you accept?",          content: "We accept all major credit cards, debit cards, and mobile payment options for your convenience."},
        {
          id: "faq-5",          title: "Can I customize a detailing package?",          content: "Absolutely! Beyond our standard packages, we offer a range of add-on services to create a custom detailing experience tailored to your vehicle's needs. Please discuss options when booking."},
        {
          id: "faq-6",          title: "What is your cancellation policy?",          content: "We require at least 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee. Please refer to our terms and conditions for full details."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our mobile detailing services, booking process, and what to expect."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="schedule" data-section="schedule">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Book Now"
      title="Ready for a Showroom Finish?"
      description="Schedule your next mobile detailing appointment with Junior Mobile Detailing today. Our team is ready to transform your vehicle with professional care and unparalleled convenience."
      buttons={[
        {
          text: "Schedule Your Detail",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-car-detailing-logo-design_23-2149903187.jpg"
      logoAlt="Junior Mobile Detailing Logo"
      logoText="Junior Mobile Detailing"
      copyrightText="© 2024 Junior Mobile Detailing. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
