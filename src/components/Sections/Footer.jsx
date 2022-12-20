import React from 'react';
import {
  FooterLogo,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from '../SocialIcons/SocialIcon';
import LinkHeading from '../Texts/LinkHeading';
import Link from '../Button/Link';
const Footer = () => {
  return (
    <footer className="bg-secondary-dark">
      <section className="py-[56px] md:px-6 md:py-[72px] md:grid md:grid-cols-3 max-w-[1112px] mx-auto lg:grid-cols-5 xl:px-0">
        <div className="flex justify-center md:justify-start">
          <FooterLogo />
        </div>
        {/* links main container */}

        <div className="pt-[47px] text-center md:pt-0 md:text-left">
          <div>
            <LinkHeading>Features</LinkHeading>
          </div>
          <div className="pt-[22px] flex flex-col gap-[10px]">
            <Link type="footer-navigation">Link Shortening</Link>
            <Link type="footer-navigation">Branded Links</Link>
            <Link type="footer-navigation">Analytics</Link>
          </div>
        </div>

        <div className="pt-10 text-center md:pt-0 md:text-left">
          <div>
            <LinkHeading>Resources</LinkHeading>
          </div>
          <div className="pt-[22px] flex flex-col gap-[10px]">
            <Link type="footer-navigation">Blog</Link>
            <Link type="footer-navigation">Developers</Link>
            <Link type="footer-navigation">Support</Link>
          </div>
        </div>

        <div className="pt-10 text-center md:pt-10 md:text-left lg:pt-0">
          <div>
            <LinkHeading>Company</LinkHeading>
          </div>
          <div className="pt-[22px] flex flex-col gap-[10px]">
            <Link type="footer-navigation">About</Link>
            <Link type="footer-navigation">Our Team</Link>
            <Link type="footer-navigation">Careers</Link>
            <Link type="footer-navigation">Contact</Link>
          </div>
        </div>

        <div className="pt-12 flex justify-center md:pt-10 md:justify-start md:items-start lg:pt-0">
          <div className="flex items-center gap-6">
            <Link type="footer-navigation">
              <Facebook />
            </Link>
            <Link type="footer-navigation">
              <Twitter />
            </Link>
            <Link type="footer-navigation">
              <Pinterest />
            </Link>
            <Link type="footer-navigation">
              <Instagram />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
