"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, CheckCircle } from 'lucide-react';
const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals collaborating on financial documents in a modern office setting." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a smartphone screen showing various social media app icons such as Facebook and Twitter." },
  { "id": "product-image", "url": "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Front view of woman wearing black t-shirt with copy space on white background." }
];
export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Webild" buttonText="Join Now" buttonVariant="icon-arrow" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Elevate Your Business"
            description="Innovative tools for modern enterprises."
            imagePosition="left"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[{ text: "Get Started", href: "contact" }, { text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovation", description: "Constantly evolving.", icon: Zap },
              { title: "Reliability", description: "Trustworthy systems.", icon: CheckCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            features={[
              { title: "Advanced Analytics", description: "In-depth performance insights.", icon: Zap },
              { title: "Custom Dashboards", description: "Personalize your workspace.", icon: CheckCircle }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Pro Analytics Suite", price: "$29/mo", imageSrc: assetMap.find(a => a.id === 'product-image')?.url },
              { id: "2", name: "Custom Dashboard", price: "$19/mo", imageSrc: assetMap.find(a => a.id === 'product-image')?.url },
              { id: "3", name: "Enterprise Package", price: "$99/mo", imageSrc: assetMap.find(a => a.id === 'product-image')?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Join Us"
            title="Stay Connected"
            description="Subscribe for updates and offers."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            onSubmit={console.log}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "About", href: "about" }] },
              { items: [{ label: "Contact", href: "contact" }, { label: "Support", href: "support" }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}