"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter, CalendarDays, Clock, MessageSquare, User, Mail, Phone, Car } from "lucide-react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function BookingPage() {
  const navItems = [
    {
      name: "Home",      id: "/"
    },
    {
      name: "Services",      id: "/#services"
    },
    {
      name: "Packages",      id: "/#packages"
    },
    {
      name: "Booking",      id: "/booking"
    },
    {
      name: "About Us",      id: "/#about"
    },
    {
      name: "Testimonials",      id: "/#testimonials"
    },
    {
      name: "FAQ",      id: "/#faq"
    },
    {
      name: "Contact Us",      id: "/contact"
    }
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
          <ContactSplitForm
            title="Book Your Mobile Detailing Appointment"
            description="Please fill out the form below with your preferred details. Our team will contact you to confirm your appointment and gather any additional vehicle information."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true },
              { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
              { name: "date", type: "date", placeholder: "Preferred Date", required: true },
              { name: "time", type: "time", placeholder: "Preferred Time", required: true }
            ]}
            multiSelect={{
              name: "service",              label: "Desired Service",              options: ["Exterior Wash", "Interior Detail", "Full Detail", "Headlight Restoration", "Ceramic Coating"]
            }}
            textarea={{
              name: "notes",              placeholder: "Any additional details or special requests?",              rows: 5
            }}
            imageSrc="http://img.b2bpic.net/free-photo/car-polishing-concept_23-2148421873.jpg"
            imageAlt="Car being detailed"
            mediaPosition="right"
            buttonText="Confirm Booking"
            onSubmit={(data) => console.log(data)}
            useInvertedBackground={false}
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
                href: "#",                ariaLabel: "Facebook"
              },
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"
              },
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
