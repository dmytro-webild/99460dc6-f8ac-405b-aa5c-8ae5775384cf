"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    {
      name: "Home",      id: "/"},
    {
      name: "Services",      id: "/#services"},
    {
      name: "Packages",      id: "/#packages"},
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
              text: "Book Now",              href: "#contact"}}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="Have questions, need a quote, or ready to schedule? Reach out to us using the form below, and we'll get back to you promptly."
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            imageSrc="http://img.b2bpic.net/free-photo/car-care-concept-male-worker-cleaning-car-with-microfiber-cloth-polishing-car-detailing_182101-700.jpg"
            imageAlt="Person cleaning a car"
            mediaAnimation="slide-up"
            inputPlaceholder="Your Email"
            buttonText="Send Message"
            termsText="By sending your message, you agree to our Privacy Policy and Terms of Service."
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