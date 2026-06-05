"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterCard from '@/components/sections/footer/FooterCard';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function BookingPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/#services" },
    { name: "Packages", id: "/#packages" },
    { name: "About Us", id: "/#about" },
    { name: "Testimonials", id: "/#testimonials" },
    { name: "FAQ", id: "/#faq" },
    { name: "Book Now", id: "/booking" }
  ];

  const handleBookingSubmit = (data: Record<string, string>) => {
    console.log("Booking data submitted:", data);
    alert("Thank you for your booking! We will contact you shortly.");
    // In a real application, you would send this data to a backend API.
  };

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

        <div id="booking" data-section="booking">
            <ContactSplitForm
            title="Book Your Detailing Service"
            description="Schedule your premium mobile car detailing service at your convenience. Fill out the form below to select your desired service, date, and time."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Full Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
              { name: "preferredDate", type: "date", placeholder: "Preferred Date", required: true },
              { name: "preferredTime", type: "time", placeholder: "Preferred Time", required: true }
            ]}
            multiSelect={{
              name: "service",              label: "Select Service",              options: ["Exterior Wash Package", "Interior Detail Package", "Full Detail Package", "Add-on: Wax", "Add-on: Headlight Restoration", "Add-on: Pet Hair Removal"]
            }}
            textarea={{
              name: "notes",              placeholder: "Any special requests or details about your vehicle?",              rows: 5
            }}
            buttonText="Confirm Booking"
            onSubmit={handleBookingSubmit}
            imageSrc="http://img.b2bpic.net/premium-photo/worker-washing-car-carwash-service_392895-159491.jpg?id=418815286"
            imageAlt="Professional car detailer washing a car"
            mediaAnimation="slide-up"
            mediaPosition="right"
            useInvertedBackground={true}
          />
        </div>

        <div id="footer" data-section="footer">
            <FooterCard
            logoSrc="http://img.b2bpic.net/free-vector/hand-drawn-car-detailing-logo-design_23-2149903187.jpg"
            logoAlt="Junior Mobile Detailing Logo"
            logoText="Junior Mobile Detailing"
            copyrightText="© 2024 Junior Mobile Detailing. All rights reserved."
            socialLinks={[
              { icon: Facebook, href: "#", ariaLabel: "Facebook" },
              { icon: Instagram, href: "#", ariaLabel: "Instagram" },
              { icon: Twitter, href: "#", ariaLabel: "Twitter" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
