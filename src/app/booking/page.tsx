"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function BookingPage() {
  const navItems = [
    {
      name: "Home",      id: "/"},
    {
      name: "Services",      id: "/#services"},
    {
      name: "Packages",      id: "/#packages"},
    {
      name: "Booking",      id: "/booking"},
    {
      name: "About Us",      id: "/#about"},
    {
      name: "Testimonials",      id: "/#testimonials"},
    {
      name: "FAQ",      id: "/#faq"},
    {
      name: "Contact Us",      id: "/contact"},
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="compact"
      sizing="medium"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={navItems}
            logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-car-detailing-logo-design_23-2149903187.jpg"
            logoAlt="Junior Mobile Detailing Logo"
            brandName="Junior Mobile Detailing"
            bottomLeftText="Your Car's Best Friend"
            bottomRightText="hello@juniordetailing.com"
            button={{
              text: "Book Now",              href: "/booking"
            }}
          />
        </div>

        <div id="booking-form" data-section="booking-form">
          <ContactText
            text="Schedule Your Mobile Detailing Service. To book, please provide your Preferred Date, Preferred Time, Desired Service (e.g., Exterior Wash, Full Detail), Your Name, Email, and Phone Number. Our team will contact you shortly to confirm your appointment and gather any additional vehicle information."
            background={{
              variant: "radial-gradient"
            }}
            useInvertedBackground={false}
            buttons={[
              { text: "Call to Book", href: "tel:+1234567890" },
              { text: "Email Us", href: "mailto:hello@juniordetailing.com" }
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
                href: "#",                ariaLabel: "Facebook"},
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"},
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}